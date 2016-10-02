
//import * as x from '../jaydatacontext';

var app = angular.module('app', []);

class Ctrl1 {

    public Name: string;

    constructor() {
        this.Name = "Ali";
    }

    f1(): void {

        //let a = x.factory({}).Products.toArray();

        

        //var todoDB = new 'Default' ("http://mysite.com/my.svc");

    }

}

app.controller('Ctrl1', Ctrl1);