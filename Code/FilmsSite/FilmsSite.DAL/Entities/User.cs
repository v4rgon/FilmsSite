using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace FilmsSite.DAL.Entities
{
    public class User : IdentityUser
    {
        public List<Comment> Comments { get; set; }
        public string RefreshToken { get; set; }
        public List<UserFilm> UserFilms { get; } = new List<UserFilm>();
    }
}
