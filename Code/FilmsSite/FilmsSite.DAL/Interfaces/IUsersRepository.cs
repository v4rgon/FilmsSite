using FilmsSite.DAL.Entities;
using System.Collections.Generic;

namespace FilmsSite.DAL.Interfaces
{
    public interface IUserRepository : IRepository<User>
    {
        IEnumerable<Film> GetFilmsCollection(string id);
    }
}
