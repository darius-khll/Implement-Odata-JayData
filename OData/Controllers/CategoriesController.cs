using OData.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.OData;

namespace OData.Controllers
{
    public class CategoriesController : ODataController
    {
        ProductsContext db = new ProductsContext();

        //[EnableQuery(AllowedQueryOptions = System.Web.OData.Query.AllowedQueryOptions.Filter | System.Web.OData.Query.AllowedQueryOptions.OrderBy,
        //    AllowedOrderByProperties = "Name",
        //    PageSize = 2
        //    )]
        [EnableQuery]
        public IQueryable<Category> Get()
        {
            //return db.Categories;
            return new List<Category>
            {
                new Category {
                    Id = 1, Name = "nnn",
                    Products = new List<Product>{
                        new Product { Id = 1 },
                        new Product { Id = 2 }
                    }
                }
            }.AsQueryable();
        }

        [EnableQuery]
        public Category Get([FromODataUri] int Key)
        {
            return Get().Single(c => c.Id == Key);
        }

        // call this method like below request
        // Odata/Categories(1)/Name
        public string GetName(int key)
        {
            return Get().Single(c => c.Id == key).Name;
        }

    }
}