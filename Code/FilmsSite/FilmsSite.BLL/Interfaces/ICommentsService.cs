using FilmsSite.BLL.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace FilmsSite.BLL.Interfaces
{
    public interface ICommentsService
    {
        Task<CommentDTO> AddCommentAsync(AddCommentDTO comment);
        IEnumerable<CommentDTO> GetByFilmId(int filmId);
        Task RemoveCommentAsync(int commentId);
    }
}
