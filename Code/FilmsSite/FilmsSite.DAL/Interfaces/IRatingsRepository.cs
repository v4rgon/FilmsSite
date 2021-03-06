﻿using FilmsSite.DAL.Entities;
using System.Collections.Generic;

namespace FilmsSite.DAL.Interfaces
{
    public interface IRatingsRepository : IRepository<Rating>
    {
        IEnumerable<Rating> GetByFilmId(int id);
    }
}