import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { AutorisationDataService } from '../Data/authorisation-data.service';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: './html/login.html'
})

export class LoginForm implements OnInit {
    model: any = {};
    returnUrl: string;
    loading = false;
    
    constructor(private authService: AuthenticationService, private router: Router)
    {
        
    }

    ngOnInit() {
        this.authService.logout();
    }

    login() {
        this.authService.login(this.model.username, this.model.password);
    }
}