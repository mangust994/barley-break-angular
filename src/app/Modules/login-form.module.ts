import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { LoginForm }   from '../Components/login-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports:      [ NgbModule, BrowserModule, FormsModule ],
    declarations: [ LoginForm],
    exports: [ LoginForm]      
})
export class LoginModule { }