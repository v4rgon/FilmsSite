using System.ComponentModel.DataAnnotations;

namespace FilmsSite.WebAPI.Models
{
    public class RegistrationModel
    {
        [Required(ErrorMessage = "Username is required!")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Email is required!")]
        [DataType(DataType.EmailAddress, ErrorMessage = "Wrong email format")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required!")]
        [DataType(DataType.Password, ErrorMessage = "Wrong password format")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Password confirmation is required!")]
        [DataType(DataType.Password, ErrorMessage = "Wrong password format")]
        public string Confirm { get; set; }
    }
}
