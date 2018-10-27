using System;

namespace FilmsSite.BLL.Exceptions
{
    public class FilmNotExistsException : Exception
    {
        public int FilmId { get; set; }
        public FilmNotExistsException(string message) : base(message) { }
    }
}
