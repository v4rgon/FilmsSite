using System;

namespace FilmsSite.DAL.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; }
        public int Likes { get; set; }
        public int Disikes { get; set; }
        public Film Film { get; set; }
        public User User { get; set; }
    }
}
