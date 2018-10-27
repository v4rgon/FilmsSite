namespace FilmsSite.WebAPI.Models
{
    public class FilmBrief
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string PictureUrl { get; set; }
        public string Description { get; set; }
        public decimal Rating { get; set; }
    }
}
