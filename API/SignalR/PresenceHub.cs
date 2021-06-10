using API.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace API.SignalR
{
    [Authorize]
    public class PresenceHub : Hub
    {
        private readonly PresenceTracker presenceTracker;
        public PresenceHub(PresenceTracker presenceTracker)
        {
            this.presenceTracker = presenceTracker;
        }

        public override async Task OnConnectedAsync()
        {
            var isOnline = await presenceTracker.UserConnected(Context.User.GetUserName(), Context.ConnectionId);
            if (isOnline)
                await Clients.Others.SendAsync("UserIsOnline", Context.User.GetUserName());

            var onlineUsers = await presenceTracker.GetOnlinUsers();
            await Clients.Caller.SendAsync("GetOnlineUsers", onlineUsers);
        }
        public override async Task OnDisconnectedAsync(Exception exception)
        {
            var isOffline = await presenceTracker.UserDisconnected(Context.User.GetUserName(), Context.ConnectionId);
            if (isOffline)
                await Clients.Others.SendAsync("UserIsOffline", Context.User.GetUserName());

            await base.OnDisconnectedAsync(exception);
        }
    }
}