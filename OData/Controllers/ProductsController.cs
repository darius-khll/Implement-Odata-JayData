using OData.Implementions;
using OData.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.OData;
using System.Web.OData.Query;

namespace OData.Controllers
{
    public class ProductsController : ODataController
    {
        ProductsContext db = new ProductsContext();
        //[EnableQuery(AllowedOrderByProperties = "Id,Name")]
        //[MyEnableQueryAttribute]
        [EnableQuery]
        public IQueryable<Product> Get()
        {
            return new List<Product>
            {
                new Product { Id = 1, Name = "name 1", Price = 11, CreatedOn = DateTimeOffset.UtcNow, Category = new Category {Id =1, Name = "Cat1" } },
                new Product { Id = 2, Name = "name 2", Price = 12, CreatedOn = DateTimeOffset.UtcNow, Category = new Category {Id =2, Name = "Cat2" } },
                new Product { Id = 3, Name = "name 3", Price = 13, CreatedOn = DateTimeOffset.UtcNow, Category = new Category {Id =3, Name = "Cat3" } },
                new Product { Id = 4, Name = "name 4", Price = 14, CreatedOn = DateTimeOffset.UtcNow, Category = new Category {Id =4, Name = "Cat4" } },
            }.AsQueryable(); ;
        }

        public System.Web.Http.IHttpActionResult GetName(int key)
        {
            Product product = Get().Single(c => c.Id == key);
            if (product == null)
            {
                return NotFound();
            }
            return Ok(product.Name);
        }

        [EnableQuery]
        public Product Get([FromODataUri] int Key)
        {
            return Get().Single(c => c.Id == Key);
        }

    }
}