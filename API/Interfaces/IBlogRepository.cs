using System.Threading.Tasks;
using API.Entities;
using API.Helpers;

namespace API.Interfaces
{
    public interface IBlogRepository
    {
        void AddBlog(Blog blog);
        Task<Blog> GetBlogById(long blogId);
        Task<PageList<Blog>> GetBlogPageList(BlogsParams blogsParams);
    }
}