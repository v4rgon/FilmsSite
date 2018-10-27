using FilmsSite.BLL.Models;
using System.Threading.Tasks;

namespace FilmsSite.BLL.Interfaces
{
    public interface IUserService
    {
        Task<RegistrationResultDTO> RegisterAsync(RegistrationDTO registrationDto);
        Task<AuthorizationResultDTO> LoginAsync(AuthorizationDTO authorizationDto);
        Task<UserDTO> GetByUsernameAsync(string username);
        Task<UserDTO> GetByIdAsync(string id);
        Task<bool> IsUserExist(string username);
        Task ConfirmEmail(string username, string code);
        Task ResetPassword(string username);
        Task ConfirmResetPassword(ResetPasswordDTO resetPasswordDto);
        Task UpdateUsersRefreshTokenAsync(string username, string refreshToken);
    }
}
