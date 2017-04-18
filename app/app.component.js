"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "   \n   <!-- <nav>\n      &lt;!&ndash;<a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n      <a routerLink=\"/heroes\" routerLinkActive=\"active\">Heroes</a>&ndash;&gt;\n      \n      <a routerLink=\"/vehicle-info\" routerLinkActive=\"active\">Vehicle-Info</a>\n      <a routerLink=\"/vehicle-diagnostic\" routerLinkActive=\"active\">Vehicle-Diagnostic</a>\n      \n      <a routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\n      <a routerLink=\"/vehicle-map\" routerLinkActive=\"active\">Vehicle-Map</a>\n      \n    </nav>-->\n    <router-outlet></router-outlet>\n  ",
        styleUrls: ['./app.component.css'],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map