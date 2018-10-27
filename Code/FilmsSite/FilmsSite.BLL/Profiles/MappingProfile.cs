using FilmsSite.BLL.Models;
using FilmsSite.DAL.Entities;

namespace FilmsSite.BLL.Profiles
{
    public class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            CreateMap<CommentDTO, CommentEntity>();
            CreateMap<CommentEntity, CommentDTO>();

            CreateMap<UpdateRatingDTO, RatingEntity>();
            CreateMap<RatingEntity, UpdateRatingDTO>();

            CreateMap<FilmDTO, FilmEntity>();
            CreateMap<FilmEntity, FilmDTO>();

            CreateMap<PhotoDTO, PhotoEntity>();
            CreateMap<PhotoEntity, PhotoDTO>();

            CreateMap<UserEntity, UserDTO>();
            CreateMap<UserDTO, UserEntity>();

            CreateMap<RegistrationDTO, UserEntity>();
        }
    }
}
