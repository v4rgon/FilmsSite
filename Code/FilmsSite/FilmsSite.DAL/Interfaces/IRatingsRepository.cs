using FilmsSite.DAL.Entities;
using System.Collections.Generic;

namespace FilmsSite.DAL.Interfaces
{
    public interface IRatingsRepository : IRepository<RatingEntity>
    {
        IEnumerable<RatingEntity> GetByFilmId(int id);
    }
}