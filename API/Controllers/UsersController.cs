﻿using API.Data;
using API.DTOs;
using API.Entities;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Authorize]
    public class UsersController : BaseApiController
    {
        private readonly IMapper mapper;
        private readonly IPhotoService photoService;
        private readonly IUnitOfWork unitOfWork;

        public UsersController(IUnitOfWork unitOfWork, IMapper mapper, IPhotoService photoService)
        {
            this.unitOfWork = unitOfWork;
            this.photoService = photoService;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers([FromQuery] UserParams userParams)
        {
            var gender = await unitOfWork.UserRepository.GetUserGender(User.GetUserName());
            userParams.CurrentUsername = User.GetUserName();

            if (string.IsNullOrEmpty(userParams.Gender))
                userParams.Gender = gender == "male" ? "female" : "male";

            var users = await unitOfWork.UserRepository.GetMemberAsync(userParams);
            var likedUsers = await unitOfWork.LikesRepository.GetUserLike(User.GetUserId(), users.Select(x => x.Id));

            users.ForEach(x => x.IsLiked = likedUsers.Any(y => y.LikedUserId == x.Id));

            Response.AddPaginationHeader(users.CurrentPage, users.PageSize, users.TotalCount, users.TotalPages);

            return Ok(users);
        }

        [HttpGet("{username}", Name = "GetUser")]
        public async Task<ActionResult<MemberDto>> GetUser(string username)
        {
            var user = await unitOfWork.UserRepository.GetMemberAsync(username);
            return user;
        }
        [HttpPut]
        public async Task<ActionResult> UpdateUser(MemberUpdateDto memberUpdateDto)
        {
            var user = await unitOfWork.UserRepository.GetUserByUsernameAsync(User.GetUserName());

            mapper.Map(memberUpdateDto, user);

            unitOfWork.UserRepository.Update(user);

            if (await unitOfWork.Complete()) return NoContent();

            return BadRequest("Failed to update user");
        }
        [HttpPost("add-photo")]
        public async Task<ActionResult<PhotoDto>> AddPhoto(IFormFile file)
        {
            var user = await unitOfWork.UserRepository.GetUserByUsernameAsync(User.GetUserName());

            var result = await photoService.AddPhotoAsync(file);

            if (result.Error != null) return BadRequest(result.Error.Message);

            var photo = new Photo
            {
                Url = result.SecureUrl.AbsoluteUri,
                PublicId = result.PublicId
            };

            if (user.Photos.Count == 0)
            {
                photo.IsMain = true;
            }

            user.Photos.Add(photo);

            if (await unitOfWork.Complete())
                return CreatedAtRoute("GetUser", new { username = user.UserName }, mapper.Map<PhotoDto>(photo));

            return BadRequest("Problem adding photo");
        }

        [HttpPut("set-main-photo/{photoId}")]
        public async Task<ActionResult> SetMainPhoto(int photoId)
        {
            var user = await unitOfWork.UserRepository.GetUserByUsernameAsync(User.GetUserName());

            var photo = user.Photos.FirstOrDefault(x => x.Id == photoId);

            if (photo.IsMain) return BadRequest("This is already your main photo");

            var currentMain = user.Photos.FirstOrDefault(x => x.IsMain);
            if (currentMain != null) currentMain.IsMain = false;

            photo.IsMain = true;

            if (await unitOfWork.Complete()) return NoContent();

            return BadRequest("Failed to set main photo");
        }
        [HttpDelete("delete-photo/{photoId}")]
        public async Task<ActionResult> DeletePhoto(int photoId)
        {
            var user = await unitOfWork.UserRepository.GetUserByUsernameAsync(User.GetUserName());

            var photo = user.Photos.FirstOrDefault(x => x.Id == photoId);

            if (photo == null) return NotFound();

            if (photo.IsMain) return BadRequest("You cannot delete you main photo");

            if (photo.PublicId != null)
            {
                var result = await photoService.DeletePhotoAsync(photo.PublicId);
                if (result.Error != null) return BadRequest(result.Error.Message);
            }

            user.Photos.Remove(photo);

            if (await unitOfWork.Complete()) return Ok();

            return BadRequest("Failed to delete this photo");
        }
    }
}
