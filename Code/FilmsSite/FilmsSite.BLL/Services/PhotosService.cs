using AutoMapper;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using FilmsSite.BLL.Exceptions;

namespace FilmsSite.BLL.Services
{
    public class PhotosService : IPhotosService
    {
        private readonly IUnitOfWork _unitOfWork;

        public PhotosService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public IEnumerable<PhotoDTO> GetByFilmId(int filmId) => Mapper.Map<IEnumerable<PhotoEntity>, IEnumerable<PhotoDTO>>(_unitOfWork.Photos.Find(p => p.Film.Id == filmId));

        public async Task<PhotoDTO> AddPhotoToFilmAsync(string url, int filmId)
        {
            var film = _unitOfWork.Films.Get(filmId);
            if (film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = filmId };

            var photo = new PhotoEntity()
            {
                Film = film,
                Fullsize = url,
                Shortcut = url,
            };
            _unitOfWork.Photos.Add(photo);
            await _unitOfWork.SaveAsync();
            return Mapper.Map<PhotoEntity, PhotoDTO>(photo);
        }
    }
}
