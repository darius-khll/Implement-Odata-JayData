
var Product = $data.Entity.extend("Product", {
    Id: {
        "type": "Edm.Int32",
        "nullable": false,
        "required": true,
        "key": true
    },
    Name: {
        "type": "Edm.String"
    },
    Price: {
        "type": "Edm.Decimal",
        "nullable": false,
        "required": true
    },
    SupplierId: {
        "type": "Edm.Int32"
    },
    CategoryId: {
        "type": "Edm.Int32"
    },
    CreatedOn: {
        "type": "Edm.DateTimeOffset",
        "nullable": false,
        "required": true
    },
    Supplier: {
        "type": "Supplier",
        "inverseProperty": "$$unbound"
    },
    Category: {
        "type": "Category",
        "inverseProperty": "$$unbound"
    }
});

var Category = $data.Entity.extend("Category", {
    Id: {
        "type": "Edm.Int32",
        "nullable": false,
        "required": true,
        "key": true
    },
    Name: {
        "type": "Edm.String"
    },
    Products: {
        "type": "Array",
        "elementType": "Product",
        "inverseProperty": "$$unbound"
    }
});

var Supplier = $data.Entity.extend("Supplier", {
    Id: {
        "type": "Edm.Int32",
        "nullable": false,
        "required": true,
        "key": true
    },
    Name: {
        "type": "Edm.String"
    },
    Products: {
        "type": "Array",
        "elementType": "Product",
        "inverseProperty": "$$unbound"
    }
});


$data.EntityContext.extend("MyJaydataContext", {
    Products: { type: $data.EntitySet, elementType: Product },
    Categories: { type: $data.EntitySet, elementType: Category },
    Suppliers: { type: $data.EntitySet, elementType: Supplier }
});