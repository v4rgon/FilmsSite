using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace FilmsSite.DAL.Seed
{
    public class SeedDatabase
    {
        public static async Task Initialize(IServiceProvider serviceProvider)
        {
            var context = serviceProvider.GetRequiredService<ApplicationDbContext>();
            context.Database.Migrate();

            var userManager = serviceProvider.GetRequiredService<UserManager<UserEntity>>();
            var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            var showshankComment1 = new CommentEntity() { Date = DateTime.Now, Disikes = 5, Likes = 15, Text = "Wonderful film!" };
            var showshankComment2 = new CommentEntity() { Date = DateTime.Now, Disikes = 7, Likes = 10, Text = "Such a great movie!" };

            if (!context.Users.Any())
            {
                await roleManager.CreateAsync(new IdentityRole("Admin"));
                await roleManager.CreateAsync(new IdentityRole("User"));

                var user = new UserEntity()
                {
                    UserName = "admin",
                    SecurityStamp = Guid.NewGuid().ToString(),
                    Comments = new List<CommentEntity>()
                    {
                        showshankComment1,
                        showshankComment2
                    }
                };
                var result = await userManager.CreateAsync(user, "P@ssw0rD");
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, "Admin");
                }
            }

            if (!context.Films.Any())
            {
                new List<FilmEntity>()
                {
                    new FilmEntity()
                    {
                        Title = "The Shawshank Redemption",
                        Year = 1994,
                        Genre = "Drama",
                        PictureUrl = "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
                        Description = "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                        Director = "Frank Darabont",
                        Rating = 0,
                        Metascore = 100,
                        Photos = new List<PhotoEntity>()
                        {
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTM0NjUxMDk5MF5BMl5BanBnXkFtZTcwNDMxNDY3Mw@@._V1_UY100_CR25,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMTM0NjUxMDk5MF5BMl5BanBnXkFtZTcwNDMxNDY3Mw@@._V1_SY1000_SX1500_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTk3NDE2Nzg3Nl5BMl5BanBnXkFtZTcwNTMxNDY3Mw@@._V1_UY100_CR25,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMTk3NDE2Nzg3Nl5BMl5BanBnXkFtZTcwNTMxNDY3Mw@@._V1_SY1000_CR0,0,1503,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTg0MDgwNjc5N15BMl5BanBnXkFtZTcwNjMxNDY3Mw@@._V1_UX100_CR0,0,100,100_AL_.jpg",
                                Fullsize ="https://m.media-amazon.com/images/M/MV5BMTg0MDgwNjc5N15BMl5BanBnXkFtZTcwNjMxNDY3Mw@@._V1_SY1000_CR0,0,661,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTkzMTY0MjE5MV5BMl5BanBnXkFtZTcwODMxNDY3Mw@@._V1_UY100_CR26,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMTkzMTY0MjE5MV5BMl5BanBnXkFtZTcwODMxNDY3Mw@@._V1_SY1000_CR0,0,1526,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_UY100_CR24,0,100,100_AL_.jpg",
                                Fullsize ="https://m.media-amazon.com/images/M/MV5BMTgxMTU1MDkwOV5BMl5BanBnXkFtZTcwMDQxNDY3Mw@@._V1_SY1000_CR0,0,1487,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTQ5NTI4NDAxMV5BMl5BanBnXkFtZTcwMTQxNDY3Mw@@._V1_UY100_CR25,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMTQ5NTI4NDAxMV5BMl5BanBnXkFtZTcwMTQxNDY3Mw@@._V1_SY1000_CR0,0,1496,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTMyODE3NTM1Ml5BMl5BanBnXkFtZTcwMzQxNDY3Mw@@._V1_UY100_CR24,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMTMyODE3NTM1Ml5BMl5BanBnXkFtZTcwMzQxNDY3Mw@@._V1_SY1000_CR0,0,1487,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTMxNzAwMzE0Nl5BMl5BanBnXkFtZTcwNDQxNDY3Mw@@._V1_UY100_CR25,0,100,100_AL_.jpg",
                                Fullsize = ""
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTg3Nzg3ODU0NV5BMl5BanBnXkFtZTcwNTQxNDY3Mw@@._V1_UY100_CR39,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMTg3Nzg3ODU0NV5BMl5BanBnXkFtZTcwNTQxNDY3Mw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_UY100_CR30,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BNzAwOTk3MDg5MV5BMl5BanBnXkFtZTcwNjQxNDY3Mw@@._V1_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTg4MDA2MDM5Nl5BMl5BanBnXkFtZTcwOTU5MTQ2Mg@@._V1_UY100_CR23,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMTg4MDA2MDM5Nl5BMl5BanBnXkFtZTcwOTU5MTQ2Mg@@._V1_SX1471_CR0,0,1471,999_AL_.jpg"
                            },
                        },
                        Comments = new List<CommentEntity>()
                        {
                            showshankComment1,
                            showshankComment2
                        },
                        Storyline = "Chronicles the experiences of a formerly successful banker" +
                                    " as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit." +
                                    " The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners," +
                                    " most notably a wise long-term inmate named Red.",
                        Duration = "2h 55m"
                    },
                    new FilmEntity()
                    {
                        Title = "The Godfather",
                        Year = 1972,
                        Genre = "Crime",
                        PictureUrl = "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
                        Description = "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                        Director = "Francis Ford Coppola",
                        Rating = 0,
                        Duration = "2h 55m",
                        Metascore = 100,
                        Photos = new List<PhotoEntity>()
                        {
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_UY100_CR12,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMTczMTk5MjkwOF5BMl5BanBnXkFtZTgwMDI0Mjk1NDM@._V1_SY1000_CR0,0,1248,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_UY100_CR19,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMTU4MTgxOTQ0Nl5BMl5BanBnXkFtZTgwNDI0Mjk1NDM@._V1_SX1375_CR0,0,1375,999_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_UX100_CR0,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BYTgzZTJlMDUtMGIxNy00ODJiLWI3NjAtYzQ4OTQ3MGQ3ZGYwXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BOGU1YjI0NmEtN2JiZi00YWRjLWJkMjctODFlMjgyYTA1MmJiXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_UY100_CR17,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BOGU1YjI0NmEtN2JiZi00YWRjLWJkMjctODFlMjgyYTA1MmJiXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,1350,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BNjk3MWYyZjAtY2M5Ni00OTIzLTkxMTItZWEwM2M2Y2E3NDcxXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_UY100_CR13,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BNjk3MWYyZjAtY2M5Ni00OTIzLTkxMTItZWEwM2M2Y2E3NDcxXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,1272,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMDhkYzhiYjEtMTQwYy00MTdmLTlkOTAtYTk1YmMyYmE5NDVmXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_UX100_CR0,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMDhkYzhiYjEtMTQwYy00MTdmLTlkOTAtYTk1YmMyYmE5NDVmXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_SY1000_CR0,0,657,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMTQ5MjY5NDU4NV5BMl5BanBnXkFtZTgwMTM1NjAyMDI@._V1_UY100_CR24,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMTQ5MjY5NDU4NV5BMl5BanBnXkFtZTgwMTM1NjAyMDI@._V1_SY1000_CR0,0,1488,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BMjAwNjgwNzI3Ml5BMl5BanBnXkFtZTgwODM0MDM4NzE@._V1_UX100_CR0,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BMjAwNjgwNzI3Ml5BMl5BanBnXkFtZTgwODM0MDM4NzE@._V1_SY1000_CR0,0,799,1000_AL_.jpg"
                            },
                            new PhotoEntity()
                            {
                                Shortcut = "https://m.media-amazon.com/images/M/MV5BODQxNzk5NzY5MV5BMl5BanBnXkFtZTcwNDIyOTUzOA@@._V1_UY100_CR21,0,100,100_AL_.jpg",
                                Fullsize = "https://m.media-amazon.com/images/M/MV5BODQxNzk5NzY5MV5BMl5BanBnXkFtZTcwNDIyOTUzOA@@._V1_SY1000_CR0,0,1429,1000_AL_.jpg"
                            }
                        }
                    },
                    new FilmEntity()
                    {
                        Title = "The Dark Knight",
                        Year = 2008,
                        Genre = "Action",
                        PictureUrl = "https://i.pinimg.com/originals/d5/30/3a/d5303a94710177b49c0d49468923c727.jpg",
                        Description = "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                        Director = "Christopher Nolan",
                        Rating = 0,
                        Metascore = 100,
                    },
                    new FilmEntity()
                    {
                        Title = "Schindler's List",
                        Year = 1993,
                        Genre = "Biography",
                        PictureUrl = "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                        Description = "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
                        Director = "Steven Spielberg",
                        Rating = 0,
                        Duration = "2h 55m",
                        Metascore = 100,
                    },
                    new FilmEntity()
                    {
                        Title = "Fight Club",
                        Year = 1999,
                        Genre = "Drama",
                        PictureUrl = "https://m.media-amazon.com/images/M/MV5BNGM2NjQxZTAtMmU5My00YTk5LWFmOWMtYjZlYzk4YzMwNjFlXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
                        Description = "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
                        Director = "David Fincher",
                        Rating = 0,
                        Metascore = 100,
                        Duration = "2h 55m"
                    },
                    new FilmEntity()
                    {
                        Title = "Lord of the Rings",
                        Year = 2003,
                        Genre = "Adventure",
                        PictureUrl = "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                        Description = "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
                        Director = "Peter Jackson",
                        Rating = 0,
                        Metascore = 100,
                        Duration = "2h 55m"
                    }
                }.ForEach(film => context.Films.Add(film));
                context.SaveChanges();
            }
        }
    }
}
