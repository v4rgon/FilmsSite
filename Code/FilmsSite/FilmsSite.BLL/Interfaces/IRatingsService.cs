using FilmsSite.BLL.Models;
using System.Threading.Tasks;

namespace FilmsSite.BLL.Interfaces
{
    public interface IRatingsService
    {
        Task AddRatingAsync(UpdateRatingDTO ratingDto);
        Task RemoveRatingAsync(string userId, int filmId);
        RatingDTO GetRating(int filmId, string userId);
        decimal GetFilmsAverageRating(int filmId);
    }
}
