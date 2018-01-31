using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Giftblitz.Models
{
    public interface IGroupRepository
    {
        IQueryable<Group> Groups { get;  }
        IQueryable<Member> Members { get; }
    }
}
