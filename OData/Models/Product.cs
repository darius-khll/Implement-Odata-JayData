using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Web.OData.Builder;
using System.Web.OData.Query;

namespace OData.Models
{
    [Select("Price", "Name", SelectType = SelectExpandType.Disabled)]
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }

        [NotFilterable, NotSortable]
        public decimal Price { get; set; }

        [ForeignKey(nameof(SupplierId))]
        [NotNavigable]
        public virtual Supplier Supplier { get; set; }
        public int SupplierId { get; set; }

        //[AutoExpand]
        [ForeignKey(nameof(CategoryId))]
        public virtual Category Category { get; set; }
        public int CategoryId { get; set; }

        public DateTimeOffset CreatedOn { get; set; }
    }
}