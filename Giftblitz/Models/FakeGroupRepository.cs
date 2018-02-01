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
                Message = "testMessageA" },
            new Group {
                GroupID = "testGroup2",
                Name = "ABC Group",
                Deadline = DateTime.Now,
                Message = "testMessageB" }
        }.AsQueryable<Group>();

        public IQueryable<Member> Members => new List<Member>
        {
            new Member
            {
                MemberID = "testMember1",
                FirstName = "Joe",
                LastName = "Jackson",
                Email = "joej@gmail.com",
                Assignee = "testAssignee1",
                Assignment = "testAssignment1"
            },
            new Member
            {
                MemberID = "testMember2",
                FirstName = "Boe",
                LastName = "Backson",
                Email = "Boeb@gmail.com",
                Assignee = "testAssignee2",
                Assignment = "testAssignment2"
            }
        }.AsQueryable<Member>();
    }
}
