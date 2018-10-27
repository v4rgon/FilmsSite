using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;

namespace FilmsSite.DAL.Repositories
{
    public class EfUserRepository : Repository<UserEntity>, IUserRepository
    {
        public EfUserRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
