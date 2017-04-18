"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MapComponent = (function () {
    function MapComponent() {
        this.title = 'Map';
        this.markers = [];
        this.carImg = {
            url: 'app/vehicle/map/img/car12.png'
        };
        // google maps zoom level
        this.zoom = 6;
        // initial center position for the map
        this.lat = 19.1016;
        this.lng = 72.9221;
    }
    MapComponent.prototype.clickedMarker = function (deviceId, index) {
        console.log("clicked the marker: " + (deviceId || index));
        // this.selectedDeviceId = deviceId;
    };
    MapComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        selector: 'map',
        styles: ["\n    .sebm-google-map-container {\n       height: 300px;\n     }\n  "],
        templateUrl: 'app/vehicle/map/map.component.html'
    })
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map