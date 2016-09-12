using OData.Models;
using System.Linq;
using System.Web.OData;

namespace OData.Controllers
{

    public class ProductsController : ODataController
    {
        ProductsContext db = new ProductsContext();

        [EnableQuery]
        public IQueryable<Product> Get()
        {
            return db.Products;
        }

        [EnableQuery]
        public Product Get([FromODataUri] int Key)
        {
            return db.Products.Single(c => c.Id == Key);
        }
        
    }
}