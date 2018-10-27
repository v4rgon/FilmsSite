using System;
using System.Collections.Generic;
using System.Text;

namespace FilmsSite.BLL.Models
{
    public class TokenDTO
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public DateTime Expires { get; set; }
        public string Role { get; set; }
    }
}
