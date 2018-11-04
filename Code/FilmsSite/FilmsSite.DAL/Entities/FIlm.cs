using System.Collections.Generic;

namespace FilmsSite.DAL.Entities
{
    public class Film
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
        public List<Photo> Photos { get; set; }
        public List<Comment> Comments { get; set; }
        public int Metascore { get; set; }
        public string Storyline { get; set; }

        public List<UserFilm> UserFilms { get; } = new List<UserFilm>();
    }
}
