namespace FilmsSite.DAL.Entities
{
    public class Photo
    {
        public int Id { get; set; }
        public string Shortcut { get; set; }
        public string Fullsize { get; set; }
        public Film Film { get; set; }
    }
}
