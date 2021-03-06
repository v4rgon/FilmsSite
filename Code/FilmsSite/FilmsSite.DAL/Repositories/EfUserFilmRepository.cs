﻿using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace FilmsSite.DAL.Repositories
{
    public class EfUserFilmsRepository : Repository<UserFilm>, IUserFilmsRepository
    {
        public EfUserFilmsRepository(ApplicationDbContext context) : base(context)
        {
        }
    }
}
