using System.Collections.Generic;
using System.Web.OData.Query;

namespace OData.Models
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        //[NotExpandable]
        public virtual ICollection<Product> Products { get; set; }
    }
}