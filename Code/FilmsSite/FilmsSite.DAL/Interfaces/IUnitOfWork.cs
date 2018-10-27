using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;

namespace FilmsSite.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        ApplicationDbContext ApplicationDataBaseContext { get; }
        UserManager<UserEntity> UserManager { get; }
        SignInManager<UserEntity> SignInManager { get; }
        IFilmsRepository Films { get; }
        ICommentsRepository Comments { get; }
        IUserRepository Users { get; }
        IPhotoRepository Photos { get; }
        IRatingsRepository Ratings { get; }
        Task SaveAsync();
    }
}
