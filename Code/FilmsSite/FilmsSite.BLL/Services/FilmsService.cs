using AutoMapper;
using FilmsSite.BLL.Exceptions;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FilmsSite.BLL.Services
{
    public class FilmsService : IFilmsService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRatingsService _ratingsService;

        public FilmsService(IUnitOfWork unitOfWork, IRatingsService ratingsService)
        {
            _unitOfWork = unitOfWork;
            _ratingsService = ratingsService;
        }

        public async Task AddFilmToUsersCollection(int filmId, string userId)
        {
            var film = _unitOfWork.Films.Get(filmId);
            if (film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = filmId };

            var user = await _unitOfWork.UserManager.FindByIdAsync(userId);

            if (_unitOfWork.UserFilms.SingleOrDefault(f => f.FilmId == film.Id && f.UserId == user.Id) == null) _unitOfWork.UserFilms.Add(new UserFilm { UserId = user.Id, User = user, FilmId = film.Id, Film = film });

            await _unitOfWork.SaveAsync();
        }

        public async Task RemoveFilmFromUsersCollection(int filmId, string userId)
        {
            var film = _unitOfWork.UserFilms.SingleOrDefault(f => f.FilmId == filmId && f.UserId == userId);
            if (film != null) _unitOfWork.ApplicationDataBaseContext.UserFilms.Remove(film);

            await _unitOfWork.SaveAsync();
        }

        public async Task<List<FilmDTO>> GetUsersFilmsCollectionAsync(string userId)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId);

            var films = _unitOfWork.Users.GetFilmsCollection(userId).Select(Mapper.Map<Film, FilmDTO>).ToList();

            return films;
        }

        public async Task UpdateRatingAsync(int filmId)
        {
            var film = _unitOfWork.Films.Get(filmId);
            if (film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = filmId };
            film.Rating = _ratingsService.GetFilmsAverageRating(filmId);

            _unitOfWork.Films.Update(film);
            await _unitOfWork.SaveAsync();
        }

        public async Task UpdateFilmAsync(FilmDTO updatedFilm)
        {
            var film = _unitOfWork.Films.Get(updatedFilm.Id);
            if (film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = updatedFilm.Id };

            Mapper.Map(updatedFilm, film);
            _unitOfWork.Films.Update(film);
            await _unitOfWork.SaveAsync();
        }

        public async Task RemoveFilmAsync(int filmId)
        {
            var film = _unitOfWork.Films.Get(filmId);
            if (film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = filmId };

            _unitOfWork.Films.Remove(film);
            await _unitOfWork.SaveAsync();
        }

        public IEnumerable<FilmDTO> GetAll() => Mapper.Map<IEnumerable<Film>, IEnumerable<FilmDTO>>(_unitOfWork.Films.All);

        public FilmDTO GetDetails(int filmId)
        {
            var film = _unitOfWork.Films.Get(filmId);
            if (film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = filmId };
            return Mapper.Map<Film, FilmDTO>(film);
        }
    }
}
