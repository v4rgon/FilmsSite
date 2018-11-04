using FilmsSite.BLL.Models;
using FilmsSite.DAL.Entities;

namespace FilmsSite.BLL.Profiles
{
    public class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            CreateMap<CommentDTO, Comment>();
            CreateMap<Comment, CommentDTO>();

            CreateMap<UpdateRatingDTO, Rating>()
                .ForMember(model => model.Value, _ => _.MapFrom(poco => poco.Rating));
            CreateMap<Rating, UpdateRatingDTO>()
                .ForMember(model => model.Rating, _ => _.MapFrom(poco => poco.Value));

            CreateMap<FilmDTO, Film>();
            CreateMap<Film, FilmDTO>();

            CreateMap<PhotoDTO, Photo>();
            CreateMap<Photo, PhotoDTO>();

            CreateMap<User, UserDTO>();
            CreateMap<UserDTO, User>();

            CreateMap<RegistrationDTO, User>();
        }
    }
}
