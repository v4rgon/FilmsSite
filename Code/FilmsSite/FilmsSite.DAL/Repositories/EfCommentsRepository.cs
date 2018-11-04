using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace FilmsSite.DAL.Repositories
{
    public class EfCommentsRepository : Repository<Comment>, ICommentsRepository
    {
        public EfCommentsRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IEnumerable<Comment> GetByFilmId(int id) => DbSet.Include(c => c.User).Include(c => c.Film).Where(c => c.Film.Id == id);
    }
}
