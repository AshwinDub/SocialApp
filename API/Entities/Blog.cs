using System;
using System.Collections.Generic;

namespace API.Entities
{
    public class Blog
    {
        public long Id { get; set; }
        public long Title { get; set; }
        public long Description { get; set; }
        public string ReferenceLink { get; set; }
        public ICollection<BlogContent> BlogContents { get; set; }
        public ICollection<BlogLikes> BlogLikes { get; set; }
        public ICollection<BlogComment> BlogComment { get; set; }
        public bool IsPublished { get; set; }
        public AppUser AppUser { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.UtcNow;
    }
}