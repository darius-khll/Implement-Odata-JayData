//import * as x from '../jaydatacontext';
var app = angular.module('myApp', []);
var Ctrl1 = (function () {
    function Ctrl1() {
        this.Name = "Ali";
    }
    Ctrl1.prototype.f1 = function () {
        //let context = new x.Default.Container({
        //    name: "oData",
        //    oDataServiceHost: "http://localhost:4516/odata",
        //    withCredentials: false,
        //    maxDataServiceVersion: "4.0"
        //});
        //let items = await context.Products.filter((c) => c.Id == 1).toArray();
    };
    return Ctrl1;
}());
app.controller('myCtrl', Ctrl1);
//# sourceMappingURL=App.js.map