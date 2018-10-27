using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using FilmsSite.WebAPI.Extensions;
using FilmsSite.WebAPI.Hubs;
using FilmsSite.WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace FilmsSite.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class CommentsController : Controller
    {
        private readonly ICommentsService _commentsService;
        private readonly IHubContext<CommentsHub> _commentsHub;

        public CommentsController(IHubContext<CommentsHub> commentsHub, ICommentsService commentsSerivce)
        {
            _commentsService = commentsSerivce;
            _commentsHub = commentsHub;
        }

        [HttpGet("get/{id:int}")]
        public ActionResult GetComments(int id) => Ok(Mapper.Map<IEnumerable<CommentDTO>, IEnumerable<Comment>>(_commentsService.GetByFilmId(id)));

        [Authorize]
        [HttpPost("add")]
        public async Task<ActionResult> AddCommentAsync([FromBody] AddComment comment)
        {
            var commentDto = Mapper.Map<AddComment, AddCommentDTO>(comment);
            commentDto.UserId = HttpContext.GetCurrentUserId();
            var addedComment = await _commentsService.AddCommentAsync(commentDto);

            await _commentsHub.Clients.All.SendAsync("commentRecieved", addedComment);

            return Ok();
        }

        [Authorize(Roles = "Admin")]
        [HttpPost("remove")]
        public async Task<IActionResult> RemoveComment([FromQuery] int commentId, int filmId)
        {
            try
            {
                await _commentsService.RemoveCommentAsync(commentId);
                await _commentsHub.Clients.All.SendAsync("commentRemoved", commentId);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}