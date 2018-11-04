using FilmsSite.BLL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmsSite.BLL.Interfaces
{
    public interface IFilmsService
    {
        Task AddFilmToUsersCollection(int FilmId, string userId);
        Task RemoveFilmFromUsersCollection(int FilmId, string userId);
        Task<List<FilmDTO>> GetUsersFilmsCollectionAsync(string userId);
        Task UpdateRatingAsync(int FilmId);
        Task UpdateFilmAsync(FilmDTO Film);
        Task RemoveFilmAsync(int FilmId);
        IEnumerable<FilmDTO> GetAll();
        FilmDTO GetDetails(int FilmId);
    }
}
