using System;
using System.Collections.Generic;

namespace Giftblitz.Models
{
    public class Group
    {
        public string GroupID { get; set; }
        public string Name { get; set; }
        public DateTime Deadline { get; set; }
        public string Message { get; set; }
    }
}
