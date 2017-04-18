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
        this.markers = [
            {
                lat: 47.659159,
                lng: -122.141515,
                deviceId: 'OBD2SampleDevice001_957'
            },
            {
                lat: 47.593307,
                lng: -122.332165,
                deviceId: 'OBD2SampleDevice002_957'
            },
            {
                lat: 47.617025,
                lng: -122.191285,
                deviceId: 'OBD2SampleDevice003_957'
            },
            {
                lat: 47.583582,
                lng: -122.130622,
                deviceId: 'OBD2SampleDevice004_957'
            },
            {
                lat: 47.639511,
                lng: -122.134376,
                deviceId: 'OBD2SampleDevice005_957'
            },
            {
                lat: 47.644328,
                lng: -122.137036,
                deviceId: 'OBD2SampleDevice006_957'
            },
            {
                lat: 47.621573,
                lng: -122.338101,
                deviceId: 'OBD2SampleDevice007_957'
            },
            {
                lat: 47.642357,
                lng: -122.137152,
                deviceId: 'OBD2SampleDevice008_957'
            }
        ];
        this.carImg = {
            url: 'app/vehicle/map/img/car4.png',
            scaledSize: {
                height: 50,
                width: 50
            }
        };
        // google maps zoom level
        this.zoom = 8;
        this.lat = 47.621573;
        this.lng = -122.338101;
    }
    InfoComponent.prototype.ngOnInit = function () {
        this.selectedDeviceId = localStorage.getItem('selectedDeviceId');
        if (this.selectedDeviceId != '') {
            this.vehicleData = this.infoService.getInfo();
        }
        this.vehicleData.fuel_consumed_since_restart = '0';
        this.vehicleData.disntance_traveled = '0';
        this.vehicleData.vehicle_speed = '0';
        this.vehicleData.travelDate = '0';
        this.vehicleData.travelTime = '0';
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
    InfoComponent.prototype.clickedMarker = function (deviceId, index) {
        console.log("clicked the marker: " + (deviceId || index));
        //  this.selectedDeviceId = deviceId;
    };
    InfoComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    InfoComponent.prototype.getSelectedDeviceMap = function (deviceId) {
        var _this = this;
        setInterval(function () {
            _this.http.get('http://autoiots1-api.azurewebsites.net/api/TelemetryApi/GetDashboardDevicePaneDataAsync?deviceId=' + deviceId)
                .subscribe(function (data) {
                console.log("=========Data=======");
                _this.vehicalData = data.json().DeviceTelemetryModel;
                console.log(_this.vehicalData.Values);
                console.log("=========Data=======");
                var tempone = _this.vehicalData.Values.fuel_consumed_since_restart;
                _this.vehicleData.fuel_consumed_since_restart = tempone.toString().substr(0, 2);
                var temptwo = _this.vehicalData.Values.vehicle_speed;
                _this.vehicleData.vehicle_speed = temptwo.toString().substr(0, 2);
                _this.vehicleData.disntance_traveled = 56;
                _this.vehicleData.travelDate = '14 April 2017';
                _this.vehicleData.travelTime = '1 Hr 10Min';
                _this.markers.push({
                    lat: parseInt(_this.vehicalData.Values.latitude),
                    lng: parseInt(_this.vehicalData.Values.longitude),
                    deviceId: _this.vehicalData.DeviceId
                });
                _this.selectedDeviceId = deviceId;
            }, function (err) {
                console.log("=========err=======");
                console.log(err.text());
                console.log("=========err=======");
            });
        }, 5000);
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    core_1.Component({
        selector: 'info',
        styles: ["\n    .sebm-google-map-container {\n       height: 300px;\n     }\n  "],
        templateUrl: 'app/vehicle/info/info.component.html',
        providers: [info_service_1.InfoService]
    }),
    __metadata("design:paramtypes", [info_service_1.InfoService,
        http_1.Http,
        router_1.Router])
], InfoComponent);
exports.InfoComponent = InfoComponent;
//# sourceMappingURL=info.component.js.map