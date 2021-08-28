using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;

namespace API.Data
{
    public class NotificationRepository : INotificationRepository
    {
        private readonly DataContext context;
        private readonly IMapper mapper;
        public NotificationRepository(DataContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }

        public void AddNotification(Notification notification)
        {
            this.context.Notifications.Add(notification);
        }

        public async Task<Notification> GetNotification(long id)
        {
            return await context.Notifications.FindAsync(id);
        }

        public async Task<PageList<NotificationDto>> GetNotifications(NotificationParams notificationParams)
        {
            var query = context.Notifications
                .OrderByDescending(m => m.NotificationDate)
                .ProjectTo<NotificationDto>(mapper.ConfigurationProvider)
                .AsQueryable();

            return await PageList<NotificationDto>.CreateAsync(query, notificationParams.PageNumber, notificationParams.PageSize);
        }
    }
}