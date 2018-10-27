namespace FilmsSite.BLL.Models
{
    public class RatingDTO
    {
        public decimal Value { get; set; }
        public bool AlreadyRated { get; set; }
        public int UsersRating { get; set; }
    }
}
