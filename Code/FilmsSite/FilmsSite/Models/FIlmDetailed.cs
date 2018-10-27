namespace FilmsSite.WebAPI.Models
{
    public class FilmDetailed
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string Genre { get; set; }
        public string Director { get; set; }
        public string PictureUrl { get; set; }
        public string Description { get; set; }
        public decimal Rating { get; set; }
        public string Duration { get; set; }
        public int Metascore { get; set; }
        public string Storyline { get; set; }
    }
}
