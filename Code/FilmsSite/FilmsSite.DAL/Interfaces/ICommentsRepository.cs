using FilmsSite.DAL.Entities;
using System.Collections.Generic;

namespace FilmsSite.DAL.Interfaces
{
    public interface ICommentsRepository : IRepository<Comment>
    {
        IEnumerable<Comment> GetByFilmId(int id);
    }
}
