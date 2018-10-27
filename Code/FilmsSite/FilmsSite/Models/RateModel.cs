using System.ComponentModel.DataAnnotations;

namespace FilmsSite.WebAPI.Models
{
    public class RateModel
    {
        [Required(ErrorMessage = "Rating value is required!")]
        public int Rating { get; set; }

        [Required(ErrorMessage = "FilmId value is required!")]
        public int FilmId { get; set; }
    }
}
