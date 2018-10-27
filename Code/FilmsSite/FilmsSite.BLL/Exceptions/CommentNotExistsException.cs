using System;

namespace FilmsSite.BLL.Exceptions
{
    public class CommentNotExistsException : Exception
    {
        public int CommentId { get; set; }
        public CommentNotExistsException(string message) : base(message) { }
    }
}