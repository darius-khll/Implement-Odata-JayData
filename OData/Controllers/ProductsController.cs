using OData.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.OData;

namespace OData.Controllers
{

    public class ProductsController : ODataController
    {
        ProductsContext db = new ProductsContext();

        [EnableQuery(AllowedQueryOptions = System.Web.OData.Query.AllowedQueryOptions.Select)]
        public IQueryable<Product> Get()
        {
            return new List<Product>
            {
                new Product { Id = 1, Name = "name 1", Price = 11 },
                new Product { Id = 2, Name = "name 2", Price = 12 },
                new Product { Id = 3, Name = "name 3", Price = 13 },
                new Product { Id = 4, Name = "name 4", Price = 14 },
            }.AsQueryable(); ;
            //return db.Products;
        }

        [EnableQuery]
        public Product Get([FromODataUri] int Key)
        {
            return Get().Single(c => c.Id == Key);
        }

    }
}