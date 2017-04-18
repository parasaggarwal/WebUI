import {Injectable} from  '@angular/core';
import {Router}     from  '@angular/router';


export class User {
    constructor(
        public email: string,
        public password: string) { }
}

var users = [
    new User('atul@admin.com','atul')
];

@Injectable()
export class AuthenticationService {


    constructor(
        private _router: Router
        ){}

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['Login']);
    }

    login(){
        localStorage.setItem("user", "login");
        localStorage.setItem("username", "Atul K");
        this._router.navigate(['vehicle-info']);
        return true;
    }

}