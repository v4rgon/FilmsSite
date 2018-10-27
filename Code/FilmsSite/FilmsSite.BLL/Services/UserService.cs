using AutoMapper;
using FilmsSite.BLL.Exceptions;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Services;
using System.Threading.Tasks;
using System.Web;

namespace FilmsSite.BLL.Services
{
    public class UserService : IUserService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ITokenService _tokenService;
        private readonly IEmailSender _emailSender;
        private readonly UserManager<UserEntity> _userManager;

        public UserService(IUnitOfWork unitOfWork, ITokenService tokenService, IEmailSender emailSender, UserManager<UserEntity> userManager)
        {
            _unitOfWork = unitOfWork;
            _tokenService = tokenService;
            _emailSender = emailSender;
            _userManager = userManager;
        }

        public async Task<UserDTO> GetByUsernameAsync(string username) => Mapper.Map<UserEntity, UserDTO>(await _unitOfWork.UserManager.FindByNameAsync(username));

        public async Task<UserDTO> GetByIdAsync(string id)
        {
            return Mapper.Map<UserEntity, UserDTO>(await _unitOfWork.UserManager.FindByIdAsync(id));
        }

        public async Task<bool> IsUserExist(string username) => await _unitOfWork.UserManager.FindByNameAsync(username) != null;

        public async Task<AuthorizationResultDTO> LoginAsync(AuthorizationDTO model)
        {
            var authorizationResult = new AuthorizationResultDTO();


            var result = await _unitOfWork.SignInManager.PasswordSignInAsync(model.UserName, model.Password, false, false);
            authorizationResult.Succeded = result.Succeeded;
            if (result.Succeeded)
            {
                var appUser = await _unitOfWork.UserManager.FindByNameAsync(model.UserName);
                appUser.RefreshToken = appUser.RefreshToken ?? _tokenService.GenerateRefreshToken();

                authorizationResult.Token = await _tokenService.GenerateJwtToken(appUser.UserName, appUser.Id);
                authorizationResult.Token.RefreshToken = appUser.RefreshToken;

                await _unitOfWork.SaveAsync();
            }

            return authorizationResult;
        }

        public async Task<RegistrationResultDTO> RegisterAsync(RegistrationDTO registrationDto)
        {
            var registrationResult = new RegistrationResultDTO();

            var user = Mapper.Map<RegistrationDTO, UserEntity>(registrationDto);
            var result = await _unitOfWork.UserManager.CreateAsync(user, registrationDto.Password);
            registrationResult.Succeded = result.Succeeded;
            if (result.Succeeded)
            {
                var code = await _unitOfWork.UserManager.GenerateEmailConfirmationTokenAsync(user);
                code = HttpUtility.UrlEncode(code);
                var callbackUrl = $"email/verify/{user.UserName}/{code}";

                var htmlMessage = $"Please confirm your account by clicking this link: <a href='http://localhost:3000/{callbackUrl}'>Confirm</a>";
                await _emailSender.SendEmailAsync(registrationDto.Email, "Confirm your email", htmlMessage);

                await _userManager.AddToRoleAsync(user, "User");
                await _unitOfWork.SignInManager.SignInAsync(user, false);

                user.RefreshToken = _tokenService.GenerateRefreshToken();

                registrationResult.Token = await _tokenService.GenerateJwtToken(user.UserName, user.Id);
                registrationResult.Token.RefreshToken = user.RefreshToken;

                await _unitOfWork.SaveAsync();
            }

            return registrationResult;
        }

        public async Task ConfirmEmail(string username, string code)
        {
            code = code.TrimEnd('/');
            var user = await _unitOfWork.UserManager.FindByNameAsync(username);
            if (user == null) throw new UserNotExistsException("User not exists!") { Username = username };

            var result = await _unitOfWork.UserManager.ConfirmEmailAsync(user, code);

            if (!result.Succeeded) throw new WrongTokenException("Wrong token!") { Operation = "Email confirmation" };
        }

        public async Task ConfirmResetPassword(ResetPasswordDTO resetModel)
        {
            var user = await _unitOfWork.UserManager.FindByNameAsync(resetModel.UserName);
            if (user == null) throw new UserNotExistsException("User not exists!") { Username = resetModel.UserName };

            var result = await _unitOfWork.UserManager.ResetPasswordAsync(user, HttpUtility.UrlDecode(resetModel.Token), resetModel.Password);

            if (!result.Succeeded) throw new WrongTokenException("Wrong token!") { Operation = "Password reset" };
        }

        public async Task UpdateUsersRefreshTokenAsync(string username, string newRefreshToken)
        {
            var user = await _unitOfWork.UserManager.FindByNameAsync(username);
            user.RefreshToken = newRefreshToken;
            await _unitOfWork.UserManager.UpdateAsync(user);
        }

        public async Task ResetPassword(string username)
        {
            var user = await _unitOfWork.UserManager.FindByNameAsync(username);
            var code = await _unitOfWork.UserManager.GeneratePasswordResetTokenAsync(user);
            code = HttpUtility.UrlEncode(code);

            var callbackUrl = $"password/reset/{user.UserName}/{code}";

            var htmlMessage = $"Reset your password by clicking this link: <a href='http://localhost:3000/{callbackUrl}'>Confirm</a>";
            await _emailSender.SendEmailAsync(user.Email, "Reset password", htmlMessage);
        }
    }
}
