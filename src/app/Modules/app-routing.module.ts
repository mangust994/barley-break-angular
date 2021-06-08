import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route, Router } from '@angular/router';
import { RegisterForm } from '../Components/register-form.component';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import {APP_BASE_HREF} from '@angular/common';
import {RegisterModule} from './register-form.module';
import {BarleyBreakRVComponent} from '../Components/barley-break-right-ver.component'
import {LoginModule} from './login-form.module';
import {LoginForm} from '../Components/login-form.component';
import {routes} from '../Models/routes';



@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule, LoginModule, RegisterModule,],
    exports: [RouterModule]
})
export class AppRoutingModule { 
}