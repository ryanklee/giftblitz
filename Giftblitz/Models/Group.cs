using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Giftblitz.Models
{
    public class Group
    {
        public string Name { get; set; }
        public DateTime Deadline { get; set; }
        public string Message { get; set; }
        public List<Member> Members { get; set; }
    }
}
