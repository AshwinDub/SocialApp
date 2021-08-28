using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        ILikesRepository LikesRepository { get; }
        IUserRepository UserRepository { get; }
        IMessageRepository MessageRepository { get; }
        INotificationRepository NotificationRepository { get; }
        IBlogRepository BlogRepository { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}