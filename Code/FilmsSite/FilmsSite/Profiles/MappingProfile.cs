using FilmsSite.BLL.Models;
using FilmsSite.WebAPI.Models;

namespace FilmsSite.WebAPI.Profiles
{
    public class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            CreateMap<AddComment, CommentDTO>();
            CreateMap<CommentDTO, Comment>();

            CreateMap<AddComment, AddCommentDTO>();

            CreateMap<RatingDTO, RatingResponse>();

            CreateMap<FilmDTO, FilmDetailed>();
            CreateMap<FilmDTO, FilmBrief>();

            CreateMap<PhotoDTO, Photo>();

            CreateMap<UserDTO, UserBrief>();
            CreateMap<UserDTO, UserDetailed>();

            CreateMap<ResetPassword, ResetPasswordDTO>();

            CreateMap<TokenDTO, Token>();
            CreateMap<Token, TokenDTO>();
        }
    }
}
