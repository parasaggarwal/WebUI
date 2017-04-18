import {Component} from '@angular/core';
import  {AuthenticationService,User} from './authentication.service';
import {Router}     from  '@angular/router';

@Component({
    selector: 'login',
    templateUrl : 'app/login/login.component.html',
    providers : [AuthenticationService],
    styles : ['']
})
export class LoginComponent {
    title = 'Login';
    public errorMsg = '';
    public user = new User('','');

    constructor(
        private _service:AuthenticationService,
        private _router: Router) {}

    login() {
         console.log(this.user);
         if(this.user.email == 'atul@admin.com' && this.user.password == 'admin'){
             this._router.navigate(['vehicle-info']);
             return true;
         }
         else{
             this.errorMsg = 'Failed to login';
             return false;
         }
    }

}
