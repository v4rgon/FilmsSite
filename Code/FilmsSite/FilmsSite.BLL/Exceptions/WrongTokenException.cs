using System;
using System.Collections.Generic;
using System.Text;

namespace FilmsSite.BLL.Exceptions
{
    public class WrongTokenException : Exception
    {
        public string Token { get; set; }
        public string Operation { get; set; }
        public WrongTokenException(string message) : base(message) { }
    }
}
