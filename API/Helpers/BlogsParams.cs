namespace API.Helpers
{
    public class BlogsParams : PaginationParams
    {
        public int UserId { get; set; }
        public int FollowerId { get; set; }
    }
}