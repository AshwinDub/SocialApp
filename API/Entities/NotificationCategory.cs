using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class NotificationCategory
    {
        public int Id { get; set; }
        public string CategoryDescription { get; set; }
        public string CategoryCode { get; set; }
        public ICollection<Notification> Notifications { get; set; }
    }
}