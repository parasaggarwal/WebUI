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
var MapComponent = (function () {
    function MapComponent(_router) {
        this._router = _router;
        this.title = 'Map';
        this.carImg = {
            url: 'app/vehicle/map/img/car12.png'
        };
        // google maps zoom level
        this.zoom = 8;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        this.selectedDeviceData = JSON.parse(localStorage.getItem('selectedDeviceData'));
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: 'A',
                draggable: true,
                deviceId: "OBD2SampleDevice002_385"
            },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B',
                draggable: false,
                deviceId: "OBD2SampleDevice002_385",
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C',
                draggable: true,
                deviceId: "OBD2SampleDevice002_385",
            }
        ];
    }
    MapComponent.prototype.clickedMarker = function (deviceId, index) {
        console.log("clicked the marker: " + (deviceId || index));
        this.selectedDeviceId = deviceId;
    };
    MapComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    MapComponent.prototype.getSelectedDeviceMap = function (deviceId) {
        alert(deviceId);
    };
    MapComponent.prototype.getVehicleInfoByDeviceId = function (deviceId) {
        alert(deviceId);
        localStorage.setItem("selectedDeviceId", deviceId);
        this._router.navigate(['vehicle-info']);
    };
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        selector: 'map',
        styles: ["\n    .sebm-google-map-container {\n       height: 300px;\n     }\n  "],
        templateUrl: 'app/vehicle/map/map.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map