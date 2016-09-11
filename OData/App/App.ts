
var app = angular.module('app', []);

class Ctrl1 {

    public Name: string;

    constructor() {
        this.Name = "Ali";
    }

    f1(): void {

        
        //var todoDB = new 'Default' ("http://mysite.com/my.svc");

    }

}

app.controller('Ctrl1', Ctrl1);