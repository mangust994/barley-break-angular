import { Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import {RegistrationService} from '../Services/register.service'
import {Router} from '@angular/router';

@Component({
    selector: 'register-form',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    templateUrl: './html/register.html'
})
export class RegisterForm { 
 constructor(private regService: RegistrationService, private router: Router)
 {}
    model: any = {};
     
    onSubmit(form: NgForm){
        console.log(this.model);
        this.regService.register( this.model.email, this.model.name, this.model.password, this.model.confirmPassword)
        this.router.navigate(['/login']);
    }
}