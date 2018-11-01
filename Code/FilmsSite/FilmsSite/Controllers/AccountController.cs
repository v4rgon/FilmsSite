using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FilmsSite.WebAPI.Models;
using AutoMapper;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using System;
using Microsoft.AspNetCore.Identity.UI.Services;

namespace FilmsSite.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IUserService _userService;

        public AccountController(IUserService userSerivce)
        {
            _userService = userSerivce;
        }

        [HttpPost("availible/{username}")]
        public async Task<ActionResult> IsUsernameAvailible(string username)
        {
            if (await _userService.IsUserExist(username))
            {
                ModelState.AddModelError("username", "This username already taken!");
                return BadRequest(ModelState);
            }

            return Ok();
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] RegistrationModel model)
        {
            var registrationResult = await _userService.RegisterAsync(Mapper.Map<RegistrationModel, RegistrationDTO>(model));
            if (registrationResult.Succeded)
            {
                var user = Mapper.Map<UserDTO, UserBrief>(await _userService.GetByUsernameAsync(model.UserName));
                user.Token = Mapper.Map<TokenDTO, Token>(registrationResult.Token);

                return Ok(user);
            }

            ModelState.AddModelError("username", "This username already taken!");

            return BadRequest(ModelState);
        }

        [HttpGet("email/verify")]
        public async Task<ActionResult> ConfirmEmail(string username, string code)
        {
            try
            {
                await _userService.ConfirmEmail(username, code);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("password/reset")]
        public async Task<ActionResult> ResetPassword(string username)
        {
            try
            {
                await _userService.ResetPassword(username);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("password/reset")]
        public async Task<ActionResult> ConfirmResetPassword(ResetPassword resetPassword)
        {
            try
            {
                await _userService.ConfirmResetPassword(Mapper.Map<ResetPassword, ResetPasswordDTO>(resetPassword));
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] AuthenticationModel model)
        {
            if (!await _userService.IsUserExist(model.UserName))
            {
                ModelState.AddModelError("username", "Username doesn't exist!");
                return BadRequest(ModelState);
            }

            var authResult = await _userService.LoginAsync(Mapper.Map<AuthenticationModel, AuthorizationDTO>(model));
            if (authResult.Succeded)
            {
                var user = Mapper.Map<UserDTO, UserBrief>(await _userService.GetByUsernameAsync(model.UserName));
                user.Token = Mapper.Map<TokenDTO, Token>(authResult.Token);
                return Ok(user);
            }

            ModelState.AddModelError("password", "Incorrect password!");
            return BadRequest(ModelState);
        }
    }
}