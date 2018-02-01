using System.Linq;

namespace Giftblitz.Models
{
    public class EFGroupRepository : IGroupRepository
    {
        private ApplicationDbContext context;

        public EFGroupRepository(ApplicationDbContext ctx)
        {
            context = ctx;
        }

        public IQueryable<Group> Groups => context.Groups;
        public IQueryable<Member> Members => context.Members;
    }
}
