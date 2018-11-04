using AutoMapper;
using FilmsSite.BLL.Interfaces;
using FilmsSite.BLL.Models;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FilmsSite.BLL.Exceptions;

namespace FilmsSite.BLL.Services
{
    public class CommentsSerivce : ICommentsService
    {
        private readonly IUnitOfWork _unitOfWork;

        public CommentsSerivce(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        public async Task<CommentDTO> AddCommentAsync(AddCommentDTO comment)
        {
            var Film = _unitOfWork.Films.Get(comment.FilmId);
            if (Film == null) throw new FilmNotExistsException("Film not exists!") { FilmId = comment.FilmId };

            var user = _unitOfWork.Users.Get(comment.UserId);
            if (user == null) throw new UserNotExistsException("User not exists!") { Id = comment.UserId };

            var commentEntity = new Comment()
            {
                Likes = 0,
                Disikes = 0,
                Text = comment.Text,
                Date = DateTime.Now,
                Film = Film,
                User = user
            };
            var addedComment = _unitOfWork.Comments.Add(commentEntity);
            await _unitOfWork.SaveAsync();
            return Mapper.Map<Comment, CommentDTO>(addedComment);
        }

        public IEnumerable<CommentDTO> GetByFilmId(int FilmId) => Mapper.Map<IEnumerable<Comment>, IEnumerable<CommentDTO>>(_unitOfWork.Comments.GetByFilmId(FilmId));

        public async Task RemoveCommentAsync(int commentId)
        {
            var comment = _unitOfWork.Comments.SingleOrDefault(c => c.Id == commentId);
            if (comment == null) throw new CommentNotExistsException("Comment not exists") { CommentId = commentId };
            _unitOfWork.Comments.Remove(comment);
            await _unitOfWork.SaveAsync();
        }
    }
}
