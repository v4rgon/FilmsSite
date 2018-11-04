using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace FilmsSite.DAL.Repositories
{
    public class EfUserRepository : Repository<User>, IUserRepository
    {
        public EfUserRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IEnumerable<Film> GetFilmsCollection(string id) => DbSet.Where(u => u.Id == id).SelectMany(user => user.UserFilms).Select(c => c.Film).ToList();
    }
}
