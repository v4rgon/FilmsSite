namespace FilmsSite.DAL.Entities
{
    public class PhotoEntity
    {
        public int Id { get; set; }
        public string Shortcut { get; set; }
        public string Fullsize { get; set; }
        public FilmEntity Film { get; set; }
    }
}
