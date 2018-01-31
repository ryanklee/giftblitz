using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Giftblitz.Models
{
    public class Member
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Group Group { get; set; }
        public Member Assignment { get; set; }
        public Member Assignee { get; set; }
        public string Email { get; set; }
    }
}
