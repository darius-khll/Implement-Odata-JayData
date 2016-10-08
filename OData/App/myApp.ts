
//import * as imp from '../App/JayDataContext/JayDataContext.d';

var myApp = angular.module('myApp', []);

class CtrlMyApp {
    public Name: string = "Ali";
    async f1() {
        //let cont = new imp.Default.Container({});
        
        let context = await new MyJaydataContext({
            name: "oData",
            oDataServiceHost: "http://localhost:4516/odata",
            withCredentials: false,
            maxDataServiceVersion: "4.0"
        });

        let items = await context.Products.filter((c) => c.Id == 1).toArray();

    }
}

myApp.controller('myCtrl', CtrlMyApp);
