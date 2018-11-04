using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace FilmsSite.DAL.Repositories
{
    public class EfPhotosRepository : Repository<Photo>, IPhotoRepository
    {
        public EfPhotosRepository(ApplicationDbContext context) : base(context) { }

        public IEnumerable<Photo> GetByFilmId(int id) => DbSet.Where(p => p.Film.Id == id);
    }
}
