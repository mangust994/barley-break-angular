import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RegisterForm }   from '../Components/register-form.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ RegisterForm],
    exports: [ RegisterForm]      
})
export class RegisterModule { }