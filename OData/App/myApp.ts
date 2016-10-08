var myApp = angular.module('myApp', []);

class CtrlMyApp {
    public Name: string;
    constructor() {
        this.Name = "Ali";
    }
    async f1() {

        debugger;
        //let context = new x.Default.Container({
        //    name: "oData",
        //    oDataServiceHost: "http://localhost:4516/odata",
        //    withCredentials: false,
        //    maxDataServiceVersion: "4.0"
        //});

        //let items = await context.Products.filter((c) => c.Id == 1).toArray();
        
    }
}

myApp.controller('myCtrl', Ctrl1);
