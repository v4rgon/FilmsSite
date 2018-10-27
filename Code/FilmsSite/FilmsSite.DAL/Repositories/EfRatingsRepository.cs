using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace FilmsSite.DAL.Repositories
{
    public class EfRatingsRepository : Repository<RatingEntity>, IRatingsRepository
    {
        public EfRatingsRepository(ApplicationDbContext context) : base(context) { }

        public IEnumerable<RatingEntity> GetByFilmId(int id) => DbSet.Where(r => r.Film.Id == id);
    }
}
