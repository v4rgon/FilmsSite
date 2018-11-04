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

        public decimal GetFilmsAverageRating(int FilmId)
        {
            var ratings = _unitOfWork.Ratings.GetByFilmId(FilmId);
            return !ratings.Any() ? 0 : Convert.ToDecimal(ratings.Average(r => r.Value));
        }

        public async Task AddRatingAsync(UpdateRatingDTO ratingDto)
        {
            var ratingEntity = new Rating()
            {
                Value = ratingDto.Rating,
                User = _unitOfWork.Users.Get(ratingDto.UserId),
                Film = _unitOfWork.Films.Get(ratingDto.FilmId),
            };
            _unitOfWork.Ratings.Add(ratingEntity);
            await _unitOfWork.SaveAsync();
        }

        public async Task RemoveRatingAsync(string userId, int FilmId)
        {
            _unitOfWork.Ratings.Remove(_unitOfWork.Ratings.Find(r => r.User.Id == userId && r.Film.Id == FilmId).First());
            await _unitOfWork.SaveAsync();
        }

        public RatingDTO GetRating(int FilmId, string userId)
        {
            var usersRating = _unitOfWork.Ratings.Find(r => r.Film.Id == FilmId && r.User.Id == userId).FirstOrDefault();
            var Film = _unitOfWork.Films.Get(FilmId);

            if (Film == null)
            {
                throw new FilmNotExistsException("Film not exists!") { FilmId = FilmId };
            }

            var ratingResponse = new RatingDTO()
            {
                Value = _unitOfWork.Films.Get(FilmId)?.Rating ?? 0,
                AlreadyRated = usersRating != null,
                UsersRating = usersRating?.Value ?? 0
            };
            return ratingResponse;
        }
    }
}
