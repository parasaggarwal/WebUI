"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var info_component_1 = require("./Vehicle/info/info.component");
var diagnostic_component_1 = require("./Vehicle/diagnostic/diagnostic.component");
var map_component_1 = require("./Vehicle/map/map.component");
var login_component_1 = require("./login/login.component");
var app_routing_module_1 = require("./app-routing.module");
var core_2 = require("angular2-google-maps/core");
var dashboard_component_1 = require("./Dashboard/dashboard.component");
var auto_complete_1 = require("@ngui/auto-complete");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            auto_complete_1.NguiAutoCompleteModule,
            http_1.HttpModule,
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyA1Ec5vXTppW3OflLiOQtGUipfmjlaPPOo',
            })
        ],
        declarations: [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            info_component_1.InfoComponent,
            diagnostic_component_1.DiagnosticComponent,
            map_component_1.MapComponent,
            login_component_1.LoginComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map