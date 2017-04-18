import {Component} from '@angular/core';
import {Router}     from  '@angular/router';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {DashboardService} from './dashboard.service';

@Component({
    selector: 'dashboard',
    styles: [`
    .sebm-google-map-container {
       height: 300px;
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
            lat:47.644328,
            lng: -122.137036,
            deviceId: 'OBD2SampleDevice006_638'
        },
        {
            lat: 47.621573,
            lng:-122.338101,
            deviceId: 'OBD2SampleDevice007_638'
        },
        {
            lat: 47.642357,
            lng: -122.137152,
            deviceId: 'OBD2SampleDevice008_638'
        }
    ]


    carImg =
        {
            url: 'app/vehicle/map/img/car12.png'
        };

    // google maps zoom level
    zoom: number = 10;
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

        setInterval(() => {

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

                        this.selectedDeviceId = deviceId;

                    },
                    err => {
                        console.log("=========err=======");
                        console.log(err.text());
                        console.log("=========err=======");
                    }
                );
        }, 5000);

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
