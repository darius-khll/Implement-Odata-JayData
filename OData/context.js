(function(mod) {
    if (typeof exports == "object" && typeof module == "object") return mod(exports, require("jaydata/core")); // CommonJS
    if (typeof define == "function" && define.amd) return define(["exports", "jaydata/core"], mod); // AMD
    mod($data.generatedContext || ($data.generatedContext = {}), $data); // Plain browser env
})(function(exports, $data) {

    exports.$data = $data;

    var types = {};

    types["OData.Models.Product"] = $data("$data.Entity").extend("OData.Models.Product", {
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
            "type": "OData.Models.Supplier",
            "inverseProperty": "$$unbound"
        },
        Category: {
            "type": "OData.Models.Category",
            "inverseProperty": "$$unbound"
        }
    });

    types["OData.Models.Category"] = $data("$data.Entity").extend("OData.Models.Category", {
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
            "elementType": "OData.Models.Product",
            "inverseProperty": "$$unbound"
        }
    });

    types["OData.Models.Supplier"] = $data("$data.Entity").extend("OData.Models.Supplier", {
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
            "elementType": "OData.Models.Product",
            "inverseProperty": "$$unbound"
        }
    });

    exports.type = types["Default.Container"] = $data("$data.EntityContext").extend("Default.Container", {
        Products: {
            "type": "$data.EntitySet",
            "elementType": "OData.Models.Product"
        },
        Categories: {
            "type": "$data.EntitySet",
            "elementType": "OData.Models.Category"
        },
        Suppliers: {
            "type": "$data.EntitySet",
            "elementType": "OData.Models.Supplier"
        }
    });

    exports.OData = {
        "Models": {
            "Product": types["OData.Models.Product"],
            "Category": types["OData.Models.Category"],
            "Supplier": types["OData.Models.Supplier"]
        }
    };

    exports.Default = {
        "Container": types["Default.Container"]
    };

    var ctxType = exports.type;
    exports.factory = function(config) {
        if (ctxType) {
            var cfg = $data.typeSystem.extend({
                name: "oData",
                oDataServiceHost: "http://localhost:4516/odata",
                withCredentials: false,
                maxDataServiceVersion: "4.0"
            }, config);
            return new ctxType(cfg);
        } else {
            return null;
        }
    };

    if (typeof Reflect !== "undefined" && typeof Reflect.defineMetadata === "function") {
        Reflect.defineMetadata("Org.OData.Capabilities.V1.NavigationRestrictions", undefined, types["OData.Models.Product"].prototype)
        Reflect.defineMetadata("Org.OData.Capabilities.V1.FilterRestrictions", undefined, types["OData.Models.Product"].prototype)
        Reflect.defineMetadata("Org.OData.Capabilities.V1.SortRestrictions", undefined, types["OData.Models.Product"].prototype)
        Reflect.defineMetadata("Org.OData.Capabilities.V1.CountRestrictions", undefined, types["OData.Models.Supplier"].prototype)
    }

});