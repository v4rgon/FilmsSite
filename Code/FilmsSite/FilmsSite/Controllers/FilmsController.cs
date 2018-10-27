using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using FilmsSite.WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace FilmsSite.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class FilmsController : Controller
    {
        private readonly IFilmsService _filmsService;

        public FilmsController(IFilmsService filmsService)
        {
            _filmsService = filmsService;
        }

        [HttpGet("get")]
        public ActionResult Get() => Ok(Mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmBrief>>(_filmsService.GetAll()));

        [HttpGet("{id:int}/details")]
        public ActionResult Details(int id)
        {
            try
            {
                var film = Mapper.Map<FilmDTO, FilmDetailed>(_filmsService.GetDetails(id));
                return Ok(film);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("remove/{filmId:int}")]
        public async Task<IActionResult> RemoveFilm(int filmId)
        {
            try
            {
                await _filmsService.RemoveFilmAsync(filmId);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("update")]
        public async Task<IActionResult> UpdateFilm([FromBody] FilmDetailed film)
        {
            try
            {
                await _filmsService.UpdateFilmAsync(Mapper.Map<FilmDetailed, FilmDTO>(film));
                return Ok(film);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
