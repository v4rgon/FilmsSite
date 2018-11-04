using FilmsSite.BLL.Models;
using System.Threading.Tasks;

namespace FilmsSite.BLL.Interfaces
{
    public interface IRatingsService
    {
        Task AddRatingAsync(UpdateRatingDTO ratingDto);
        Task RemoveRatingAsync(string userId, int FilmId);
        RatingDTO GetRating(int FilmId, string userId);
        decimal GetFilmsAverageRating(int FilmId);
    }
}
