using System.Linq;
using System.Web.OData;
using System.Web.OData.Query;

namespace OData.Implementions
{
    public class MyEnableQueryAttribute : EnableQueryAttribute
    {
        public override IQueryable ApplyQuery(IQueryable queryable, ODataQueryOptions queryOptions)
        {
            // Don't apply Skip and Top.
            var ignoreQueryOptions = AllowedQueryOptions.Skip | AllowedQueryOptions.Top;
            return queryOptions.ApplyTo(queryable, ignoreQueryOptions);
        }
    }
}