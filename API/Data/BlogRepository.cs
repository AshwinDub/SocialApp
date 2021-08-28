using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;

namespace API.Data
{
    public class BlogRepository : IBlogRepository
    {
        private readonly DataContext context;
        private readonly IMapper mapper;
        public BlogRepository(DataContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }
        public void AddBlog(Blog blog)
        {
            context.Blogs.Add(blog);
        }

        public async Task<Blog> GetBlogById(long blogId)
        {
            return await context.Blogs.FindAsync(blogId);
        }

        public async Task<PageList<Blog>> GetBlogPageList(BlogsParams blogsParams)
        {
            var query = context.Blogs
                .OrderByDescending(m => m.CreatedOn)
                // .ProjectTo<NotificationDto>(mapper.ConfigurationProvider)
                .AsQueryable();

            return await PageList<Blog>.CreateAsync(query, blogsParams.PageNumber, blogsParams.PageSize);
        }
    }
}