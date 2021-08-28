using API.DTOs;
using API.Entities;
using API.Helpers;
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface INotificationRepository
    {
        void AddNotification(Notification notification);
        Task<Notification> GetNotification(long id);
        Task<PageList<NotificationDto>> GetNotifications(NotificationParams notificationParams);
    }
}