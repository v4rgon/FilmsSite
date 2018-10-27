using System;

namespace FilmsSite.BLL.Exceptions
{
    public class UserNotExistsException : Exception
    {
        public string Username { get; set; }
        public string Id { get; set; }
        public UserNotExistsException(string message) : base(message) { }
    }
}
