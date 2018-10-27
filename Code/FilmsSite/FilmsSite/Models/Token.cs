using System;
using Newtonsoft.Json;

namespace FilmsSite.WebAPI.Models
{
    public class Token
    {
        [JsonProperty("token")]
        public string AccessToken { get; set; }

        [JsonProperty("refresh_token")]
        public string RefreshToken { get; set; }

        [JsonProperty("expires")]
        public DateTime Expires { get; set; }

        [JsonProperty("role")]
        public string Role { get; set; }
    }
}
