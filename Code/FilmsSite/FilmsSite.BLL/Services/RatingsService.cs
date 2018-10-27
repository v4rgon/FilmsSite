using AutoMapper;
using FilmsSite.BLL.Exceptions;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsSite.BLL.Services
{
    public class RatingsService : IRatingsService
    {
        private readonly IUnitOfWork _unitOfWork;

        public RatingsService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public decimal GetFilmsAverageRating(int filmId)
        {
            var ratings = _unitOfWork.Ratings.GetByFilmId(filmId);
            return !ratings.Any() ? 0 : Convert.ToDecimal(ratings.Average(r => r.Rating));
        }

        public async Task AddRatingAsync(UpdateRatingDTO ratingDto)
        {
            var ratingEntity = new RatingEntity()
            {
                Rating = ratingDto.Rating,
                User = _unitOfWork.Users.Get(ratingDto.UserId),
                Film = _unitOfWork.Films.Get(ratingDto.FilmId),
            };
            _unitOfWork.Ratings.Add(ratingEntity);
            await _unitOfWork.SaveAsync();
        }

        public async Task RemoveRatingAsync(string userId, int filmId)
        {
            _unitOfWork.Ratings.Remove(_unitOfWork.Ratings.Find(r => r.User.Id == userId && r.Film.Id == filmId).First());
            await _unitOfWork.SaveAsync();
        }

        public RatingDTO GetRating(int filmId, string userId)
        {
            var usersRating = _unitOfWork.Ratings.Find(r => r.Film.Id == filmId && r.User.Id == userId).FirstOrDefault();
            var film = _unitOfWork.Films.Get(filmId);

            if (film == null)
            {
                throw new FilmNotExistsException("Film not exists!") { FilmId = filmId };
            }

            var ratingResponse = new RatingDTO()
            {
                Value = _unitOfWork.Films.Get(filmId)?.Rating ?? 0,
                AlreadyRated = usersRating != null,
                UsersRating = usersRating?.Rating ?? 0
            };
            return ratingResponse;
        }
    }
}
