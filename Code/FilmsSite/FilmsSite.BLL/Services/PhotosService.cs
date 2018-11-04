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

        public IEnumerable<PhotoDTO> GetByFilmId(int FilmId) => Mapper.Map<IEnumerable<Photo>, IEnumerable<PhotoDTO>>(_unitOfWork.Photos.Find(p => p.Film.Id == FilmId));

        public async Task<PhotoDTO> AddPhotoToFilmAsync(string url, int FilmId)
        {
            var Film = _unitOfWork.Films.Get(FilmId);
            if (Film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = FilmId };

            var photo = new Photo()
            {
                Film = Film,
                Fullsize = url,
                Shortcut = url,
            };
            _unitOfWork.Photos.Add(photo);
            await _unitOfWork.SaveAsync();
            return Mapper.Map<Photo, PhotoDTO>(photo);
        }
    }
}
