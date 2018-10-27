using Newtonsoft.Json;

namespace FilmsSite.WebAPI.Models
{
    public class Photo
    {
        [JsonProperty(PropertyName = "thumbnail")]
        public string Shortcut { get; set; }

        [JsonProperty(PropertyName = "src")]
        public string Fullsize { get; set; }
    }
}
