
var Product = $data.Entity.extend("Product", {
    Id: { type: "int", key: true, computed: true },
    Task: { type: String, required: true, maxLength: 200 },
    DueDate: { type: Date },
    Completed: { type: Boolean }
});

