using FilmsSite.DAL.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace FilmsSite.DAL.Data
{
    public class ApplicationDbContext : IdentityDbContext<UserEntity>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<FilmEntity> Films { get; set; }
        public DbSet<PhotoEntity> Photos { get; set; }
        public DbSet<CommentEntity> Comments { get; set; }

        public DbSet<RatingEntity> Ratings { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.Entity<FilmEntity>().HasMany(f => f.Photos).WithOne(p => p.Film).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<CommentEntity>().HasOne(c => c.Film).WithMany(f => f.Comments).OnDelete(DeleteBehavior.Cascade);
            builder.Entity<CommentEntity>().HasOne(c => c.User).WithMany(f => f.Comments).OnDelete(DeleteBehavior.Cascade);

            builder.Entity<RatingEntity>().HasOne(r => r.User).WithMany().OnDelete(DeleteBehavior.Cascade);
            builder.Entity<RatingEntity>().HasOne(r => r.Film).WithMany().OnDelete(DeleteBehavior.Cascade);
        }
    }
}
