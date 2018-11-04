using FilmsSite.DAL.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FilmsSite.DAL.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Film> Films { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<UserFilm> UserFilms { get; set; }
        public DbSet<Rating> Ratings { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<Film>().HasMany(f => f.Photos).WithOne(p => p.Film).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Comment>().HasOne(c => c.Film).WithMany(f => f.Comments).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Comment>().HasOne(c => c.User).WithMany(f => f.Comments).OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Rating>().HasOne(r => r.User).WithMany().OnDelete(DeleteBehavior.Cascade);
            builder.Entity<Rating>().HasOne(r => r.Film).WithMany().OnDelete(DeleteBehavior.Cascade);

            builder.Entity<UserFilm>().HasKey(t => new { t.UserId, t.FilmId });
            builder.Entity<UserFilm>().HasOne(f => f.Film).WithMany(_ => _.UserFilms).HasForeignKey(Film => Film.FilmId);
            builder.Entity<UserFilm>().HasOne(f => f.User).WithMany(_ => _.UserFilms).HasForeignKey(Film => Film.UserId);
        }
    }
}
