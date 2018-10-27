using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Security.Claims;

namespace FilmsSite.WebAPI.Extensions
{
    public static class HttpContextExtensions
    {
        public static string GetCurrentUserId(this HttpContext context)
        {
            return context.User.Claims.FirstOrDefault(claim => claim.Type == ClaimTypes.NameIdentifier)?.Value;
        }
    }
}
