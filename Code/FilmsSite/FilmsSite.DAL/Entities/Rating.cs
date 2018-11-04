namespace FilmsSite.DAL.Entities
{
    public class Rating
    {
        public int Id { get; set; }
        public int Value { get; set; }
        public Film Film { get; set; }
        public User User { get; set; }
    }
}
