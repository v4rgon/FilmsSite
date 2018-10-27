using FilmsSite.DAL.Entities;
using System.Collections.Generic;

namespace FilmsSite.DAL.Interfaces
{
    public interface IPhotoRepository : IRepository<PhotoEntity>
    {
        IEnumerable<PhotoEntity> GetByFilmId(int id);
    }
}
