import {Component, OnInit, ElementRef,ViewEncapsulation} from '@angular/core';
import {Info} from "./info";
import {InfoService} from "./info.service";
import {DATA} from "./mock-info"
import {Router}     from  '@angular/router';
import { Http } from "@angular/http";

@Component({
    selector: 'info',
    styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
    templateUrl : 'app/vehicle/info/info.component.html',
    providers : [InfoService]
})



export class InfoComponent implements OnInit{
    public deviceId    : any;
    public vehicleData : any;
    vehicalData        : any;
    public selectedDeviceId :any;

    title                 = 'Vehicle Info';
    isValid               = false;
    backLinkVisible       = false;
    public morevehileInfo = false;
    vehicleComponent      = true;



    constructor(
            private infoService: InfoService,
            public http: Http,
            private _router: Router
     ){}



    ngOnInit(): void {
         this.selectedDeviceId = localStorage.getItem('selectedDeviceId');
            if(this.selectedDeviceId != ''){
                this.vehicleData = this.infoService.getInfo();
            }

        this.vehicleData.fuel_consumed_since_restart = '0';
        this.vehicleData.disntance_traveled          = '0';
        this.vehicleData.vehicle_speed               = '0';
        this.vehicleData.travelDate                  = '0';
        this.vehicleData.travelTime                  = '0';

    }

    getDeviceInfo() : void{
        console.log(this.deviceId);
        this.isValid = true;
    }

    showVechileComponent (sectionName:any){
        this.vehicleComponent = false;
        this.morevehileInfo   = true;
        this.backLinkVisible  = true;
    }

    getVehicleDashboard(){
        this.vehicleComponent = true;
        this.morevehileInfo   = false;
        this.backLinkVisible  = false;
    }


    getModule(modulename:any){
        if(modulename == 'info'){
            this._router.navigate(['vehicle-info']);
        }
        else{
            this._router.navigate(['vehicle-diagnostic']);
        }
    }



    markers: marker[] = [
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
            lat:47.644328,
            lng: -122.137036,
            deviceId: 'OBD2SampleDevice006_957'
        },
        {
            lat: 47.621573,
            lng:-122.338101,
            deviceId: 'OBD2SampleDevice007_957'
        },
        {
            lat: 47.642357,
            lng: -122.137152,
            deviceId: 'OBD2SampleDevice008_957'
        }
    ]

    carImg =
        {
            url: 'app/vehicle/map/img/car4.png',
            scaledSize: {
                height: 50,
                width: 50
            }
        };

    // google maps zoom level
    zoom: number = 8;
    lat: number  = 47.621573;
    lng: number  = -122.338101;

    clickedMarker( deviceId:string, index: number) {
        console.log(`clicked the marker: ${deviceId || index}`)
      //  this.selectedDeviceId = deviceId;
    }


    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

    public myVar : any;

    getSelectedDeviceMap(deviceId:any){
        console.log("========getSelectedDeviceMap========");
        console.log(deviceId);
        console.log(this.selectedDeviceId);
        console.log("========getSelectedDeviceMap========");

        clearInterval(this.myVar);
    //    if(this.selectedDeviceId != deviceId){

//            clearInterval(this.selectedDeviceId);
            this.myVar =  setInterval(() => {

                this.http.get('http://autoiots1-api.azurewebsites.net/api/TelemetryApi/GetDashboardDevicePaneDataAsync?deviceId='+deviceId)
                    .subscribe(
                        data => {
                            console.log("=========Data=======");

                            this.vehicalData = data.json().DeviceTelemetryModel;
                            console.log( this.vehicalData.Values);
                            console.log("=========Data=======");



                            var tempone = this.vehicalData.Values.fuel_consumed_since_restart;
                            this.vehicleData.fuel_consumed_since_restart = tempone.toString().substr(0,2);
                            var temptwo = this.vehicalData.Values.vehicle_speed;
                            this.vehicleData.vehicle_speed = temptwo.toString().substr(0,2);
                            this.vehicleData.disntance_traveled = 56;


                            this.vehicleData.travelDate = '14 April 2017';
                            this.vehicleData.travelTime = '1 Hr 10Min';


                            this.markers.push({
                                lat:parseInt(this.vehicalData.Values.latitude),
                                lng:parseInt(this.vehicalData.Values.longitude) ,
                                deviceId:this.vehicalData.DeviceId
                            });

                            this.selectedDeviceId = deviceId;
                        },
                        err => {
                            console.log("=========err=======");
                            console.log(err.text());
                            console.log("=========err=======");
                        }
                    );
            }, 5000);
        //}
    }
}





// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    deviceId: string;
}
