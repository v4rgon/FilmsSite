using Newtonsoft.Json;

namespace FilmsSite.WebAPI.Models
{
    public class Comment
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("date")]
        public string Date { get; set; }

        [JsonProperty("text")]
        public string Text { get; set; }

        [JsonProperty("user")]
        public UserBrief User { get; set; }

        [JsonProperty("film")]
        public FilmBrief Film { get; set; }
    }
}
