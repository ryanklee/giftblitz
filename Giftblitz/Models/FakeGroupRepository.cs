using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Giftblitz.Models
{
    public class FakeGroupRepository : IGroupRepository
    {
        public IQueryable<Group> Groups => new List<Group>
        {
            new Group {
                GroupID = "testGroup1",
                Name = "Acme",
                Deadline = DateTime.Now,
                Members = { "testMemberA", "testMemberB", "testMemberC" },
                Message = "testMessageA" },
            new Group {
                GroupID = "testGroup2",
                Name = "ABC Group",
                Deadline = DateTime.Now,
                Members = { "testMemberD", "testMemberE", "testMemberF" },
                Message = "testMessageB" }
        }.AsQueryable<Group>();

        public IQueryable<Member> Members => new List<Member>
        {
            new Member
            {
                MemberID = "testMemberA",
                Group = "testGroup1",
                FirstName = "Bob",
                LastName = "Jones",
                Email = "bobjones@email.com",
                Assignment = "testMemberB",
                Assignee = "testMemberC"
            },
            new Member
            {
                MemberID = "testMemberB",
                Group = "testGroup1",
                FirstName = "Frank",
                LastName = "Miller",
                Email = "frankmiller@email.com",
                Assignment = "testMemberA",
                Assignee = "testMemberC"
            },
            new Member
            {
                MemberID = "testMemberC",
                Group = "testGroup2",
                FirstName = "Selma",
                LastName = "Wallach",
                Email = "selmaw@email.com",
                Assignment = "testMemberB",
                Assignee = "testMemberC"
            }
        }.AsQueryable<Member>();
    }
}
