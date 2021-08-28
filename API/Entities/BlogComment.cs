using System;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class BlogComment
    {
        [Key]
        public long Id { get; set; }
        public Blog Blog { get; set; }
        public long BlogId { get; set; }
        public long CommentByUserId { get; set; }
        public AppUser CommentByUser { get; set; }
        public long? CommentRlyToId { get; set; }
        public AppUser CommentRlyTo { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime UpdatedOn { get; set; }
        public DateTime DeletedOn { get; set; }
    }
}