using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Giftblitz.Models
{
    public class FakeGroupRepository : IGroupRepository
    {
        DateTime now = DateTime.Now;

        public IQueryable<Group> Groups => new List<Group>
        {
            new Group {
                GroupID = "testGroup1",
                Name = "Acme",
                Deadline = now,
                Message = "testMessageA" },
            new Group {
                GroupID = "testGroup2",
                Name = "ABC Group",
                Deadline = now,
                Message = "testMessageB" }
        }.AsQueryable<Group>();
    }
}
