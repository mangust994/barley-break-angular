import { Component } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { AutorisationDataService } from '../Data/authorisation-data.service';

@Component({
    selector: 'header',
    templateUrl: "./html/header.html",
    styleUrls: ["./styles/header.scss"]
})
export class HeaderComponent { 
    constructor(private authService: AuthenticationService){}
    user: string;
    checkUser() {
        this.user = localStorage.getItem('currentUser')
        if(this.user == undefined)
            return false;
        else
            return true;
    }
    logout() {
        this.authService.logout();
    }
}