using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using FilmsSite.WebAPI.Extensions;
using FilmsSite.WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace FilmsSite.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class FilmsController : Controller
    {
        private readonly IFilmsService _FilmsService;

        public FilmsController(IFilmsService FilmsService)
        {
            _FilmsService = FilmsService;
        }

        [HttpPost("addtocollection/{FilmId:int}")]
        public async Task<ActionResult> AddToCollectionAsync(int FilmId)
        {
            try
            {
                var userId = HttpContext.GetCurrentUserId();
                await _FilmsService.AddFilmToUsersCollection(FilmId, userId);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("removefromcollection/{FilmId:int}")]
        public async Task<ActionResult> RemoveFromCollectionAsync(int FilmId)
        {
            try
            {
                var userId = HttpContext.GetCurrentUserId();
                await _FilmsService.RemoveFilmFromUsersCollection(FilmId, userId);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get")]
        public ActionResult Get() => Ok(Mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmBrief>>(_FilmsService.GetAll()));

        [HttpGet("userscollection")]
        public async Task<ActionResult> UsersCollectionAsync()
        {
            try
            {
                var userId = HttpContext.GetCurrentUserId();

                var Films = Mapper.Map<IEnumerable<FilmDTO>, IEnumerable<FilmBrief>>(await _FilmsService.GetUsersFilmsCollectionAsync(userId));

                return Ok(Films);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("{id:int}/details")]
        public ActionResult Details(int id)
        {
            try
            {
                var Film = Mapper.Map<FilmDTO, FilmDetailed>(_FilmsService.GetDetails(id));
                return Ok(Film);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("remove/{FilmId:int}")]
        public async Task<IActionResult> RemoveFilm(int FilmId)
        {
            try
            {
                await _FilmsService.RemoveFilmAsync(FilmId);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("update")]
        public async Task<IActionResult> UpdateFilm([FromBody] FilmDetailed Film)
        {
            try
            {
                await _FilmsService.UpdateFilmAsync(Mapper.Map<FilmDetailed, FilmDTO>(Film));
                return Ok(Film);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
