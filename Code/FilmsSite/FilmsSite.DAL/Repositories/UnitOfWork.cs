using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using System;
using System.Threading.Tasks;

namespace FilmsSite.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        public UnitOfWork(ApplicationDbContext applicationDataBaseContext,
            UserManager<UserEntity> userManager,
            SignInManager<UserEntity> signInManager,
            ICommentsRepository comments,
            IFilmsRepository films,
            IUserRepository users,
            IPhotoRepository photos,
            IRatingsRepository ratings)
        {
            ApplicationDataBaseContext = applicationDataBaseContext;
            UserManager = userManager;
            SignInManager = signInManager;

            Comments = comments;
            Films = films;
            Users = users;
            Photos = photos;
            Ratings = ratings;
        }

        public ApplicationDbContext ApplicationDataBaseContext { get; }
        public UserManager<UserEntity> UserManager { get; private set; }
        public SignInManager<UserEntity> SignInManager { get; private set; }
        public ICommentsRepository Comments { get; private set; }
        public IFilmsRepository Films { get; private set; }
        public IUserRepository Users { get; private set; }
        public IPhotoRepository Photos { get; private set; }
        public IRatingsRepository Ratings { get; private set; }
        public async Task SaveAsync() => await ApplicationDataBaseContext.SaveChangesAsync();

        private bool _disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    ApplicationDataBaseContext.Dispose();
                }
            }

            _disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
