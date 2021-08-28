using System.Threading.Tasks;
using API.Entities;
using API.Extensions;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class BlogController : BaseApiController
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly IMapper mapper;
        public BlogController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.mapper = mapper;
        }

        [HttpPost]
        public async Task<ActionResult<Blog>> CreateBlog(Blog blog)
        {
            blog.CreatedBy = User.GetUserId();
            unitOfWork.BlogRepository.AddBlog(blog);

            if (await unitOfWork.Complete()) return Ok(blog);

            return BadRequest("Unable to create blog");
        }
    }
}