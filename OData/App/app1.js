
var app = angular.module('myApp', []);

app.controller('myCtrl', function () {
    var vm = this;

    vm.f1 = function () {

        var context = new Default.Container({
            name: "oData",
            oDataServiceHost: "http://localhost:4516/odata",
            withCredentials: false,
            maxDataServiceVersion: "4.0"
        });

        context.Products.toArray();

    };

});
