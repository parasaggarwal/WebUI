import {Component, OnInit} from '@angular/core';
import {Router}     from  '@angular/router';

@Component({
    selector: 'map',
    styles: [`
    .sebm-google-map-container {
       height: 300px;
     }
  `],
    templateUrl : 'app/vehicle/map/map.component.html'
})
export class MapComponent {

    title = 'Map';
    public selectedDeviceId : string;

    constructor(
        private _router: Router){}

    carImg =
        {
            url: 'app/vehicle/map/img/car12.png'
        };
    // google maps zoom level
    zoom: number = 8;

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
    selectedDeviceData = JSON.parse(localStorage.getItem('selectedDeviceData'));



    markers: marker[] = [
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
    ]



    getSelectedDeviceMap(deviceId:any){
          alert(deviceId);
    }

    getVehicleInfoByDeviceId(deviceId:any){
        alert(deviceId);
        localStorage.setItem("selectedDeviceId",deviceId);
        this._router.navigate(['vehicle-info']);
    }
}


// just an interface for type safety.
interface marker {
    lat: number;
    lng: number;
    label?: string;
    draggable: boolean;
    deviceId: string;
}

