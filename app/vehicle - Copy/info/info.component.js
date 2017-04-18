"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var info_service_1 = require("./info.service");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var InfoComponent = (function () {
    function InfoComponent(infoService, http, _router) {
        this.infoService = infoService;
        this.http = http;
        this._router = _router;
        this.title = 'Vehicle Info';
        this.isValid = false;
        this.backLinkVisible = false;
        this.morevehileInfo = false;
        this.vehicleComponent = true;
    }
    InfoComponent.prototype.ngOnInit = function () {
        this.selectedDeviceId = localStorage.getItem('selectedDeviceId');
        if (this.selectedDeviceId != '') {
            this.vehicleData = this.infoService.getInfo();
        }
    };
    InfoComponent.prototype.getDeviceInfo = function () {
        console.log(this.deviceId);
        this.isValid = true;
    };
    InfoComponent.prototype.showVechileComponent = function (sectionName) {
        this.vehicleComponent = false;
        this.morevehileInfo = true;
        this.backLinkVisible = true;
    };
    InfoComponent.prototype.getVehicleDashboard = function () {
        this.vehicleComponent = true;
        this.morevehileInfo = false;
        this.backLinkVisible = false;
    };
    InfoComponent.prototype.getModule = function (modulename) {
        if (modulename == 'info') {
            this._router.navigate(['vehicle-info']);
        }
        else {
            this._router.navigate(['vehicle-diagnostic']);
        }
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    core_1.Component({
        selector: 'info',
        templateUrl: 'app/vehicle/info/info.component.html',
        providers: [info_service_1.InfoService]
    }),
    __metadata("design:paramtypes", [info_service_1.InfoService,
        http_1.Http,
        router_1.Router])
], InfoComponent);
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=info.component.js.map