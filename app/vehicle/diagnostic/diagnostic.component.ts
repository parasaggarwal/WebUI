import { Component } from '@angular/core';
import {Router}     from  '@angular/router';

@Component({
    selector: 'info',
    templateUrl : 'app/vehicle/diagnostic/diagnostic.component.html'
   /* template: `
    <h1>{{title}}</h1>   
  `*/
})
export class DiagnosticComponent {
    title = 'Vehicle Diagnostic';

    constructor(
        private _router: Router
    ){}
    getModule(modulename:any){
        if(modulename == 'info'){
            this._router.navigate(['vehicle-info']);
        }
        else{
            this._router.navigate(['vehicle-diagnostic']);
        }
    }
}
