namespace FilmsSite.BLL.Models
{
    public class AddCommentDTO
    {
        public string Text { get; set; }
        public int FilmId { get; set; }
        public string UserId { get; set; }
    }
}
