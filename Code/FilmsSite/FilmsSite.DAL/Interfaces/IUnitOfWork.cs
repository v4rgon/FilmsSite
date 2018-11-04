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
        UserManager<User> UserManager { get; }
        SignInManager<User> SignInManager { get; }
        IFilmsRepository Films { get; }
        ICommentsRepository Comments { get; }
        IUserRepository Users { get; }
        IPhotoRepository Photos { get; }
        IUserFilmsRepository UserFilms { get; }
        IRatingsRepository Ratings { get; }
        Task SaveAsync();
    }
}
