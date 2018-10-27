using System.ComponentModel.DataAnnotations;

namespace FilmsSite.WebAPI.Models
{
    public class AuthenticationModel
    {
        [Required(ErrorMessage = "Username is required!")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Password is required!")]
        [DataType(DataType.Password, ErrorMessage = "Wrong password format")]
        public string Password { get; set; }
    }
}
