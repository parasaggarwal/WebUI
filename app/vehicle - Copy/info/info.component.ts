import {Component, OnInit, ElementRef,ViewEncapsulation} from '@angular/core';
import {Info} from "./info";
import {InfoService} from "./info.service";
import {DATA} from "./mock-info"
import {Router}     from  '@angular/router';
import { Http } from "@angular/http";

@Component({
    selector: 'info',
    templateUrl : 'app/vehicle/info/info.component.html',
    providers : [InfoService]
})



export class InfoComponent implements OnInit{
    title = 'Vehicle Info';
    public vehicleData : any;
    public deviceId : any;
    isValid = false;
    backLinkVisible = false;
    public morevehileInfo = false;
    vehicleComponent = true;
    constructor(
        private infoService: InfoService,
            public http: Http,
        private _router: Router
     ){}

     public selectedDeviceId :any;

    ngOnInit(): void {
         this.selectedDeviceId = localStorage.getItem('selectedDeviceId');
            if(this.selectedDeviceId != ''){
                this.vehicleData = this.infoService.getInfo();
            }
    }

    getDeviceInfo() : void{
        console.log(this.deviceId);
        this.isValid = true;
    }

    showVechileComponent (sectionName:any){
        this.vehicleComponent = false;
        this.morevehileInfo = true;
        this.backLinkVisible = true;
    }

    getVehicleDashboard(){
        this.vehicleComponent = true;
        this.morevehileInfo = false;
        this.backLinkVisible = false;
    }


    getModule(modulename:any){
        if(modulename == 'info'){
            this._router.navigate(['vehicle-info']);
        }
        else{
            this._router.navigate(['vehicle-diagnostic']);
        }

    }
}
