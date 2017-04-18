import {Component} from '@angular/core';
import {Router}     from  '@angular/router';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {DashboardService} from './dashboard.service';


@Component({
    selector: 'dashboard',
    styles: [`
    .sebm-google-map-container {
       height: 450px;
     }
  `],
    templateUrl : 'app/dashboard/dashboard.component.html',
    providers : [DashboardService]
})
export class DashboardComponent {

    title = 'Map';
    public selectedDeviceId :any;
    result : any;
    public deviceId :any;

    constructor(
        private _router: Router,
        private http: Http,
        private _dashboardService : DashboardService
    ){}

    getDeviceInfo(){
        alert(this.deviceId);
        localStorage.setItem('selectedDeviceId',this.deviceId);
        this._router.navigate(['vehicle-info']);
    }


    markers: marker[] = [
        {
            lat: 51.673858,
            lng: 7.815982,
            deviceId: 'A'
        },
        {
            lat: 51.373858,
            lng: 7.215982,
            deviceId: 'B'
        },
        {
            lat: 51.723858,
            lng: 7.895982,
            deviceId: 'C'
        }
    ]


    carImg =
        {
            url: 'app/vehicle/map/img/car12.png'
        };

    // google maps zoom level
    zoom: number = 1;
    // initial center position for the map
    lat: number = 51.673858;
    lng: number = 7.815982;

    clickedMarker( deviceId:string, index: number) {
        console.log(`clicked the marker: ${deviceId || index}`)
        this.selectedDeviceId = deviceId;
    }


    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }


    vehicalData : any;

    temp : any;
    getSelectedDeviceMap(deviceId:any){

       /* setInterval(() => {

            this.http.get('http://autoiots1-api.azurewebsites.net/api/TelemetryApi/GetDashboardDevicePaneDataAsync?deviceId='+deviceId)
                .subscribe(
                    data => {
                        console.log("=========Data=======");

                        this.vehicalData = data.json().DeviceTelemetryModel;
                        console.log( this.vehicalData.Values);
                        console.log("=========Data=======");


                        this.markers.push({
                            lat:parseInt(this.vehicalData.Values.latitude),
                            lng:parseInt(this.vehicalData.Values.longitude) ,
                            deviceId:this.vehicalData.DeviceId
                        });

                        localStorage.setItem('selectedDeviceData',this.temp );
                        localStorage.setItem('markars',this.vehicalData );

                    },
                    err => {
                        console.log("=========err=======");
                        console.log(err.text());
                        console.log("=========err=======");
                    }
                );
        }, 5000);*/


        this.http.get('http://autoiots1-api.azurewebsites.net/api/TelemetryApi/GetDashboardDevicePaneDataAsync?deviceId='+deviceId)
            .subscribe(
                data => {
                    console.log("=========Data=======");

                    this.vehicalData = data.json().DeviceTelemetryModel;
                    console.log( this.vehicalData.Values);
                    console.log("=========Data=======");


                    this.markers.push({
                        lat:parseInt(this.vehicalData.Values.latitude),
                        lng:parseInt(this.vehicalData.Values.longitude) ,
                        deviceId:this.vehicalData.DeviceId
                    });

                    localStorage.setItem('selectedDeviceData',this.temp );
                    localStorage.setItem('markars',this.vehicalData );

                },
                err => {
                    console.log("=========err=======");
                    console.log(err.text());
                    console.log("=========err=======");
                }
            );

    }




    getVehicleInfoByDeviceId(deviceId:any){
        this._router.navigate(['vehicle-info']);
    }


}



// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    deviceId: string;
}
