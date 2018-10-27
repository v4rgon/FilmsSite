using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace FilmsSite.DAL.Entities
{
    public class UserEntity : IdentityUser
    {
        public List<CommentEntity> Comments { get; set; }
        public string RefreshToken { get; set; }
    }
}
