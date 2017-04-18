import {Component} from '@angular/core';
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
    markers: marker[] = [
    ];

    carImg =
        {
            url: 'app/vehicle/map/img/car12.png'
        };

    // google maps zoom level
    zoom: number = 6;
    // initial center position for the map
    lat: number = 19.1016;
    lng: number = 72.9221;

    clickedMarker( deviceId:string, index: number) {
        console.log(`clicked the marker: ${deviceId || index}`)
       // this.selectedDeviceId = deviceId;
    }


    markerDragEnd(m: marker, $event: MouseEvent) {
        console.log('dragEnd', m, $event);
    }

}

interface marker {
    lat: number;
    lng: number;
    deviceId: string;
}

