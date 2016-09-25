using OData.Models;
using System.Linq;
using System.Web.OData;

namespace OData.Controllers
{
    public class CategoriesController : ODataController
    {
        ProductsContext db = new ProductsContext();

        [EnableQuery(AllowedQueryOptions = System.Web.OData.Query.AllowedQueryOptions.Filter | System.Web.OData.Query.AllowedQueryOptions.OrderBy,
            AllowedOrderByProperties = "Name",
            PageSize = 2
            )]
        public IQueryable<Category> Get()
        {
            return db.Categories;
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