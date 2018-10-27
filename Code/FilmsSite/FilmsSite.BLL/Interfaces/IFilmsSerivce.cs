using FilmsSite.BLL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmsSite.BLL.Interfaces
{
    public interface IFilmsService
    {
        Task UpdateRatingAsync(int filmId);
        Task UpdateFilmAsync(FilmDTO film);
        Task RemoveFilmAsync(int filmId);
        IEnumerable<FilmDTO> GetAll();
        FilmDTO GetDetails(int filmId);
    }
}
