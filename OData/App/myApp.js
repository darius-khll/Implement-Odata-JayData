var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
var myApp = angular.module('myApp', []);
class CtrlMyApp {
    constructor() {
        this.Name = "Ali";
    }
    f1() {
        return __awaiter(this, void 0, void 0, function* () {
            debugger;
            //let context = new x.Default.Container({
            //    name: "oData",
            //    oDataServiceHost: "http://localhost:4516/odata",
            //    withCredentials: false,
            //    maxDataServiceVersion: "4.0"
            //});
            //let items = await context.Products.filter((c) => c.Id == 1).toArray();
        });
    }
}
myApp.controller('myCtrl', Ctrl1);
//# sourceMappingURL=myApp.js.map