using Giftblitz.Models;
using Microsoft.AspNetCore.Mvc;

namespace Giftblitz.Controllers
{
    public class GroupController : Controller
    {
        private IGroupRepository repository;

        public GroupController(IGroupRepository repo)
        {
            repository = repo;
        }
    }
}
