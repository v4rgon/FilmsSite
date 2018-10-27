using Newtonsoft.Json;

namespace FilmsSite.WebAPI.Models
{
    public class RefreshTokenModel
    {
        [JsonProperty("userName")]
        public string UserName { get; set; }

        [JsonProperty("refresh_token")]
        public string RefreshToken { get; set; }
    }
}
