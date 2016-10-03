import * as x from '../jaydatacontext';

var app = angular.module('app1', []);

class Ctrl1 {

    public Name: string;

    constructor() {
        this.Name = "Ali";
    }

    async f1(): Promise<void> {
        
        let context = new x.Default.Container({
            name: "oData",
            oDataServiceHost: "http://localhost:4516/odata",
            withCredentials: false,
            maxDataServiceVersion: "4.0"
        });

        let items = await context.Products.filter((c) => c.Id == 1).toArray();
        debugger;

    }

}

app.controller('Ctrl1', Ctrl1);