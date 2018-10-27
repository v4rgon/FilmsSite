using FilmsSite.BLL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmsSite.BLL.Interfaces
{
    public interface IPhotosService
    {
        IEnumerable<PhotoDTO> GetByFilmId(int filmId);

        Task<PhotoDTO> AddPhotoToFilmAsync(string path, int id);
    }
}
