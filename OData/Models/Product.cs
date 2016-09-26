using System.ComponentModel.DataAnnotations.Schema;
using System.Web.OData.Query;

namespace OData.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [NotFilterable, NotSortable]
        public decimal Price { get; set; }

        [ForeignKey(nameof(SupplierId))]
        public virtual Supplier Supplier { get; set; }
        public int SupplierId { get; set; }


        [ForeignKey(nameof(CategoryId))]
        public virtual Category Category { get; set; }
        public int CategoryId { get; set; }
    }
}