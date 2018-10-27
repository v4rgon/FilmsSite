using System.ComponentModel.DataAnnotations;

namespace FilmsSite.WebAPI.Models
{
    public class ResetPassword
    {
        [Required(ErrorMessage = "Username is required!")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Token is required!")]
        public string Token { get; set; }

        [Required(ErrorMessage = "Password is required!")]
        public string Password { get; set; }
    }
}
