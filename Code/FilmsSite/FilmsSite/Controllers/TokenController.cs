using AutoMapper;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using FilmsSite.WebAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace FilmsSite.WebAPI.Controllers
{
    [Route("api/[controller]")]
    public class TokenController : Controller
    {
        private readonly ITokenService _tokenService;
        private readonly IUserService _userService;

        public TokenController(ITokenService tokenService, IUserService userService)
        {
            _tokenService = tokenService;
            _userService = userService;
        }


        [HttpPost("refresh")]
        public async Task<IActionResult> Refresh([FromBody] RefreshTokenModel model)
        {
            var user = await _userService.GetByUsernameAsync(model.UserName);
            if (user == null) return BadRequest("User doesn't exist!");

            if (user.RefreshToken != model.RefreshToken || user.RefreshToken == null) return BadRequest("Wrong refresh token!");

            var newJwtToken = await _tokenService.GenerateJwtToken(user.UserName, user.Id);

            return Ok(Mapper.Map<TokenDTO, Token>(newJwtToken));
        }

        [HttpPost("revoke"), Authorize]
        public async Task<IActionResult> Revoke()
        {
            var username = User.Identity.Name;

            var user = await _userService.GetByUsernameAsync(username);
            if (user == null) return BadRequest("User doesn't exist!");

            await _userService.UpdateUsersRefreshTokenAsync(username, null);

            return Ok();
        }
    }
}