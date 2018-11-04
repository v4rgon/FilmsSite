using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace FilmsSite.DAL.Repositories
{
    public class EfRatingsRepository : Repository<Rating>, IRatingsRepository
    {
        public EfRatingsRepository(ApplicationDbContext context) : base(context) { }

        public IEnumerable<Rating> GetByFilmId(int id) => DbSet.Where(r => r.Film.Id == id);
    }
}
