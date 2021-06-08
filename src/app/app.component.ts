import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './Services/authentication.service';
    
@Component({
    selector: 'my-app',
    template: `
                <div>
                    <header *ngIf="checkRoute()"></header>
                    <hero-section *ngIf="checkRoute()"></hero-section>
                    <barley-break *ngIf="checkRoute()"></barley-break>
                    <find-game *ngIf="checkAuth()"></find-game>
                    <router-outlet></router-outlet>
                    <footer *ngIf="checkRoute()"></footer>
                </div>`
})
export class AppComponent {

    user: string;
    constructor(private router: Router, private authService: AuthenticationService)
    {
    }
    checkRoute() : boolean{
        if(this.router.url === '/register')
            return false;
        else if(this.router.url === '/login')
            return false;
        else
            return true;
    }
    checkAuth() : boolean{
        this.user = localStorage.getItem('currentUser')
        if(this.user == undefined)
            return false;
        else
            return true;
    }
}