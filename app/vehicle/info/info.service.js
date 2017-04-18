"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InfoService = (function () {
    function InfoService() {
    }
    InfoService.prototype.getInfo = function () {
        //return DATA;
        return {
            name: 'Atul K ',
            deviceId: "OBD2SampleDevice002_385",
            temperature: 71.39338516299306,
            humidity: 33.62639425863809,
            accelerator_pedal_position: 88.0386716490791,
            fuel_consumed_since_restart: 37.2,
            torque_at_transmission: 347.99002299457356,
            odometer: 5246457.792641497,
            fuel_level: -81.10611709817596,
            engine_speed: 9822.722198158935,
            steering_wheel_angle: -79.44612095106685,
            vehicle_speed: 78,
            brake_pedal_status: 0,
            ignition_status: 2,
            gear_lever_position: 8,
            transmission_gear_position: 6,
            door_status: 2,
            headlamp_status: 0,
            high_beam_status: 0,
            windshield_wiper_status: 0,
            parking_brake_status: 0,
            disntance_traveled: 158
        };
    };
    return InfoService;
}());
InfoService = __decorate([
    core_1.Injectable()
], InfoService);
exports.InfoService = InfoService;
//# sourceMappingURL=info.service.js.map