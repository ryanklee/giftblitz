﻿using System.Linq;

namespace Giftblitz.Models
{
    public interface IGroupRepository
    {
        IQueryable<Group> Groups { get;  }
    }
}
