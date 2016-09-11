using OData.Models;
using System.Linq;
using System.Web.OData;

namespace OData.Controllers
{
    public class CategoriesController : ODataController
    {
        ProductsContext db = new ProductsContext();

        [EnableQuery]
        public IQueryable<Category> Get()
        {
            return db.Categories;
        }

    }
}