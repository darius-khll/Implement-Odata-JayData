using OData.Models;
using System.Web.Http;
using System.Web.OData.Builder;
using System.Web.OData.Extensions;

namespace OData
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            ODataModelBuilder builder = new ODataConventionModelBuilder();

            builder.EntitySet<Product>("Products");
            builder.EntitySet<Category>("Categories");
            var supplier = builder.EntitySet<Supplier>("Suppliers");

            supplier.EntityType.Ignore(c => c.Name);

            config.MapODataServiceRoute(
                routeName: "ODataRoute",
                routePrefix: "odata",
                model: builder.GetEdmModel()
                );
        }
    }
}
