using System;
using System.Collections.Generic;

namespace API.Entities
{
    public class BlogContent
    {
        public long Id { get; set; }
        public int ContentType { get; set; }
        public string Content { get; set; }
        public DateTime CreatedOn { get; set; }
        public long CreatedBy { get; set; }
        public long BlogId { get; set; }
        public Blog Blog { get; set; }
    }
}