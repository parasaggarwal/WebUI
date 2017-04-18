import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


export class Vehicle {

    name: string;
    deviceId : string;
    temperature : number;
    humidity : number;
    accelerator_pedal_position : number;
    fuel_consumed_since_restart : number;
    torque_at_transmission : number;
    odometer : number;

    fuel_level : number;
    engine_speed : number;
    steering_wheel_angle : number;
    vehicle_speed : number;
    brake_pedal_status : number;
    ignition_status : number;

    gear_lever_position : number;
    transmission_gear_position : number;
    door_status : number;
    headlamp_status : number;
    high_beam_status : number;
    windshield_wiper_status : number;
    parking_brake_status     : number;
    disntance_traveled : number;

}


@Injectable()
export class DashboardService {

constructor (private http: Http) {}

    getVehicleData ()  {
        return this.http.get('http://autoiots1-api.azurewebsites.net/api/TelemetryApi/GetDashboardDevicePaneDataAsync?deviceId=')
            .map(res => res.json)
            .catch(this.handleError);

    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }



}


/*
 Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://bit.ly/l1cense
 */