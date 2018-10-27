using FilmsSite.DAL.Entities;
using System.Collections.Generic;

namespace FilmsSite.DAL.Interfaces
{
    public interface ICommentsRepository : IRepository<CommentEntity>
    {
        IEnumerable<CommentEntity> GetByFilmId(int id);
    }
}
