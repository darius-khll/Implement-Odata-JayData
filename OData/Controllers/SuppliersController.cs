using OData.Models;
using System.Linq;
using System.Web.OData;

namespace OData.Controllers
{
    public class SuppliersController : ODataController
    {
        ProductsContext db = new ProductsContext();

        [EnableQuery]
        public IQueryable<Supplier> Get()
        {
            return db.Suppliers;
        }

    }
}