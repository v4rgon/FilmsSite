using Microsoft.AspNetCore.Http;

namespace FilmsSite.WebAPI.Models
{
    public class UploadFile
    {
        public IFormFile File { get; set; }
        public int FilmId { get; set; }
        public string Source { get; set; }
        public long Size { get; set; }
        public int Width { get; set; }
        public int Height { get; set; }
        public string Extension { get; set; }
    }
}
