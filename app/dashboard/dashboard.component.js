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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var dashboard_service_1 = require("./dashboard.service");
var DashboardComponent = (function () {
    function DashboardComponent(_router, http, _dashboardService) {
        this._router = _router;
        this.http = http;
        this._dashboardService = _dashboardService;
        this.title = 'Map';
        this.markers = [
            {
                lat: 47.659159,
                lng: -122.141515,
                deviceId: 'OBD2SampleDevice001_638'
            },
            {
                lat: 47.593307,
                lng: -122.332165,
                deviceId: 'OBD2SampleDevice002_638'
            },
            {
                lat: 47.617025,
                lng: -122.191285,
                deviceId: 'OBD2SampleDevice003_638'
            },
            {
                lat: 47.583582,
                lng: -122.130622,
                deviceId: 'OBD2SampleDevice004_638'
            },
            {
                lat: 47.639511,
                lng: -122.134376,
                deviceId: 'OBD2SampleDevice005_638'
            },
            {
                lat: 47.644328,
                lng: -122.137036,
                deviceId: 'OBD2SampleDevice006_638'
            },
            {
                lat: 47.621573,
                lng: -122.338101,
                deviceId: 'OBD2SampleDevice007_638'
            },
            {
                lat: 47.642357,
                lng: -122.137152,
                deviceId: 'OBD2SampleDevice008_638'
            }
        ];
        this.carImg = {
            url: 'app/vehicle/map/img/car12.png'
        };
        // google maps zoom level
        this.zoom = 10;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
    }
    DashboardComponent.prototype.getDeviceInfo = function () {
        alert(this.deviceId);
        localStorage.setItem('selectedDeviceId', this.deviceId);
        this._router.navigate(['vehicle-info']);
    };
    DashboardComponent.prototype.clickedMarker = function (deviceId, index) {
        console.log("clicked the marker: " + (deviceId || index));
        this.selectedDeviceId = deviceId;
    };
    DashboardComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    DashboardComponent.prototype.getSelectedDeviceMap = function (deviceId) {
        var _this = this;
        setInterval(function () {
            _this.http.get('http://autoiots1-api.azurewebsites.net/api/TelemetryApi/GetDashboardDevicePaneDataAsync?deviceId=' + deviceId)
                .subscribe(function (data) {
                console.log("=========Data=======");
                _this.vehicalData = data.json().DeviceTelemetryModel;
                console.log(_this.vehicalData.Values);
                console.log("=========Data=======");
                _this.markers.push({
                    lat: parseInt(_this.vehicalData.Values.latitude),
                    lng: parseInt(_this.vehicalData.Values.longitude),
                    deviceId: _this.vehicalData.DeviceId
                });
                localStorage.setItem('selectedDeviceData', _this.temp);
                localStorage.setItem('markars', _this.vehicalData);
                _this.selectedDeviceId = deviceId;
            }, function (err) {
                console.log("=========err=======");
                console.log(err.text());
                console.log("=========err=======");
            });
        }, 5000);
    };
    DashboardComponent.prototype.getVehicleInfoByDeviceId = function (deviceId) {
        this._router.navigate(['vehicle-info']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        styles: ["\n    .sebm-google-map-container {\n       height: 300px;\n     }\n  "],
        templateUrl: 'app/dashboard/dashboard.component.html',
        providers: [dashboard_service_1.DashboardService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        http_1.Http,
        dashboard_service_1.DashboardService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map