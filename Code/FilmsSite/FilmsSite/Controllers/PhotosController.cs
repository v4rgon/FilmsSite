using AutoMapper;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using FilmsSite.WebAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmsSite.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class PhotosController : Controller
    {
        private readonly IPhotosService _photosService;
        private readonly IFilesService _filesService;

        public PhotosController(IPhotosService photosService, IFilesService filesService)
        {
            _photosService = photosService;
            _filesService = filesService;
        }

        [HttpGet("get/{id:int}")]
        public ActionResult GetPhotos(int id) => Ok(Mapper.Map<IEnumerable<PhotoDTO>, IEnumerable<Photo>>(_photosService.GetByFilmId(id)));

        [HttpGet("download/{name}")]
        public IActionResult Download(string name)
        {
            try
            {
                var fileStream = _filesService.GetFile(name);
                return Ok(fileStream);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("upload")]
        public async Task<IActionResult> Upload(UploadFile model)
        {
            try
            {
                var file = model.File;
                if (file.Length <= 0) return BadRequest();

                var apiPath = await _filesService.UploadFile(file);
                var newPhoto = await _photosService.AddPhotoToFilmAsync(apiPath, model.FilmId);
                return Ok(Mapper.Map<PhotoDTO, Photo>(newPhoto));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}