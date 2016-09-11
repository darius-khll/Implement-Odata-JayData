using OData.Models;
using System.Web.OData;

namespace OData.Controllers
{

    public class ProductsController : ODataController
    {
        ProductsContext db = new ProductsContext();
        
    }
}