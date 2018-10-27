using System.Threading.Tasks;
using FilmsSite.BLL.Models;

namespace FilmsSite.BLL.Interfaces
{
    public interface ITokenService
    {
        Task<TokenDTO> GenerateJwtToken(string username, string id);
        string GenerateRefreshToken();
    }
}
