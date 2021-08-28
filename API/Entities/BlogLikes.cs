using System;

namespace API.Entities
{
    public class BlogLikes
    {
        public Blog BlogLiked { get; set; }
        public long BlogId { get; set; }
        public long LikedByUserId { get; set; }
        public AppUser LikedByUser { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
    }
}