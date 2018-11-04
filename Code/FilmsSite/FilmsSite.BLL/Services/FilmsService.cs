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

        public async Task AddFilmToUsersCollection(int FilmId, string userId)
        {
            var film = _unitOfWork.Films.Get(FilmId);
            if (film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = FilmId };

            var user = await _unitOfWork.UserManager.FindByIdAsync(userId);

            if (_unitOfWork.UserFilms.SingleOrDefault(f => f.FilmId == film.Id && f.UserId == user.Id) == null) _unitOfWork.UserFilms.Add(new UserFilm { UserId = user.Id, User = user, FilmId = film.Id, Film = film });

            await _unitOfWork.SaveAsync();
        }

        public async Task RemoveFilmFromUsersCollection(int FilmId, string userId)
        {
            var film = _unitOfWork.UserFilms.SingleOrDefault(f => f.FilmId == FilmId && f.UserId == userId);
            if (film != null) _unitOfWork.ApplicationDataBaseContext.UserFilms.Remove(film);

            await _unitOfWork.SaveAsync();
        }

        public async Task<List<FilmDTO>> GetUsersFilmsCollectionAsync(string userId)
        {
            var user = await _unitOfWork.UserManager.FindByIdAsync(userId);

            var films = _unitOfWork.Users.GetFilmsCollection(userId).Select(Mapper.Map<Film, FilmDTO>).ToList();

            return films;
        }

        public async Task UpdateRatingAsync(int FilmId)
        {
            var Film = _unitOfWork.Films.Get(FilmId);
            if (Film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = FilmId };
            Film.Rating = _ratingsService.GetFilmsAverageRating(FilmId);

            _unitOfWork.Films.Update(Film);
            await _unitOfWork.SaveAsync();
        }

        public async Task UpdateFilmAsync(FilmDTO updatedFilm)
        {
            var Film = _unitOfWork.Films.Get(updatedFilm.Id);
            if (Film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = updatedFilm.Id };

            Mapper.Map(updatedFilm, Film);
            _unitOfWork.Films.Update(Film);
            await _unitOfWork.SaveAsync();
        }

        public async Task RemoveFilmAsync(int FilmId)
        {
            var Film = _unitOfWork.Films.Get(FilmId);
            if (Film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = FilmId };

            _unitOfWork.Films.Remove(Film);
            await _unitOfWork.SaveAsync();
        }

        public IEnumerable<FilmDTO> GetAll() => Mapper.Map<IEnumerable<Film>, IEnumerable<FilmDTO>>(_unitOfWork.Films.All);

        public FilmDTO GetDetails(int FilmId)
        {
            var Film = _unitOfWork.Films.Get(FilmId);
            if (Film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = FilmId };
            return Mapper.Map<Film, FilmDTO>(Film);
        }
    }
}
