using System;

namespace FilmsSite.DAL.Entities
{
    public class CommentEntity
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; }
        public int Likes { get; set; }
        public int Disikes { get; set; }
        public FilmEntity Film { get; set; }
        public UserEntity User { get; set; }
    }
}
