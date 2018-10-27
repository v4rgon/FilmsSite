namespace FilmsSite.BLL.Models
{
    public class CommentDTO
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public string Text { get; set; }
        public UserDTO User { get; set; }
        public FilmDTO Film { get; set; }
    }
}
