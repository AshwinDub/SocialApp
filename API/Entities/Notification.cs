using System;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Notification
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public DateTime NotificationDate { get; set; }
        public int ReceiverId { get; set; }
        public AppUser Receiver { get; set; }
        public long RefId { get; set; }
        public int NotificationCategoryId { get; set; }
        public NotificationCategory NotificationCategory { get; set; }
        public bool IsRead { get; set; }
        public bool IsFavorite { get; set; }
        public bool IsDeleted { get; set; }
    }
}