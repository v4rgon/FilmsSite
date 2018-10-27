namespace FilmsSite.DAL.Entities
{
    public class RatingEntity
    {
        public int Id { get; set; }
        public int Rating { get; set; }
        public FilmEntity Film { get; set; }
        public UserEntity User { get; set; }
    }
}
