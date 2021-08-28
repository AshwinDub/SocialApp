using API.Interfaces;
using Microsoft.AspNetCore.SignalR;

namespace API.SignalR
{
    public class NotificationHub : Hub
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly PresenceTracker presenceTracker;

        public NotificationHub(IUnitOfWork unitOfWork, PresenceTracker presenceTracker)
        {
            this.unitOfWork = unitOfWork;
            this.presenceTracker = presenceTracker;
        }
    }
}