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

        [EnableQuery]
        public Category Get([FromODataUri] int Key)
        {
            return db.Categories.Single(c => c.Id == Key);
        }

    }
}