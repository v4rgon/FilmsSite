namespace FilmsSite.BLL.Models
{
    public class UpdateRatingDTO
    {
        public int Rating { get; set; }
        public int FilmId { get; set; }
        public string UserId { get; set; }
    }
}
