using Microsoft.EntityFrameworkCore;

namespace Giftblitz.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Group> Groups { get; set; }
        public DbSet<Member> Members { get; set; }
    }
}
