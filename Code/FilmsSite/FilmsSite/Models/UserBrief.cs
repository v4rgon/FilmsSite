using Newtonsoft.Json;

namespace FilmsSite.WebAPI.Models
{
    public class UserBrief
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public Token Token { get; set; }
    }
}
