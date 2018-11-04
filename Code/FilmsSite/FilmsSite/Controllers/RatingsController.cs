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
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FilmsSite.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class RatingsController : Controller
    {
        private readonly IRatingsService _ratingsService;
        private readonly IFilmsService _FilmsService;

        public RatingsController(IRatingsService ratingsService, IFilmsService FilmsService)
        {
            _ratingsService = ratingsService;
            _FilmsService = FilmsService;
        }

        [Authorize]
        [HttpPost("update")]
        public async Task<ActionResult> UpdateRatingAsync([FromBody] RateModel model)
        {
            var ratingDto = new UpdateRatingDTO()
            {
                FilmId = model.FilmId,
                Rating = model.Rating,
                UserId = HttpContext.GetCurrentUserId()
            };

            try
            {
                await _ratingsService.AddRatingAsync(ratingDto);
                await _FilmsService.UpdateRatingAsync(model.FilmId);

                return Ok(_ratingsService.GetRating(model.FilmId, ratingDto.UserId));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("get/{id:int}")]
        public ActionResult GetRating(int id)
        {
            try
            {
                var userId = HttpContext.GetCurrentUserId();
                var rating = _ratingsService.GetRating(id, userId);
                return Ok(Mapper.Map<RatingDTO, RatingResponse>(rating));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [Authorize]
        [HttpPost("remove/{id:int}")]
        public async Task<ActionResult> RemoveRatingAsync(int id)
        {
            try
            {
                var userId = HttpContext.GetCurrentUserId();
                await _ratingsService.RemoveRatingAsync(userId, id);
                await _FilmsService.UpdateRatingAsync(id);

                return Ok(Mapper.Map<RatingDTO, RatingResponse>(_ratingsService.GetRating(id, userId)));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}