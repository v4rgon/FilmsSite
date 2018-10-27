namespace FilmsSite.WebAPI.Models
{
    public class RatingResponse
    {
        public decimal Value { get; set; }
        public bool AlreadyRated { get; set; }
        public int UsersRating { get; set; }
    }
}
