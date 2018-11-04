using FilmsSite.DAL.Data;
using FilmsSite.DAL.Entities;
using FilmsSite.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace FilmsSite.DAL.Repositories
{
    public class EfFilmsRepository : Repository<Film>, IFilmsRepository
    {
        public EfFilmsRepository(ApplicationDbContext context) : base(context) { }

        public override Film Get(int id) => DbSet.Include(f => f.Comments).FirstOrDefault(f => f.Id == id);
    }
}

