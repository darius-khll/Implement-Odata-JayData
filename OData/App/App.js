//import * as x from '../jaydatacontext';
var app = angular.module('app', []);
var Ctrl1 = (function () {
    function Ctrl1() {
        this.Name = "Ali";
    }
    Ctrl1.prototype.f1 = function () {
        //let a = x.factory({}).Products.toArray();
        //var todoDB = new 'Default' ("http://mysite.com/my.svc");
    };
    return Ctrl1;
}());
app.controller('Ctrl1', Ctrl1);
//# sourceMappingURL=App.js.map