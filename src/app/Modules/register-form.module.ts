import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RegisterForm }   from '../Components/register-form.component';
import {MustMatchDirective}   from '../Components/CustomValiators/must-match.directive'
import {SpecSymbolDirective}   from '../Components/CustomValiators/spec-symbol.directive'
import {LowerRegDirective}   from '../Components/CustomValiators/lower-reg.directive'
import {UpperRegDirective} from '../Components/CustomValiators/upper-reg.directive'
import {NumberCheckDirective}   from '../Components/CustomValiators/number.directive'


@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ RegisterForm, MustMatchDirective, SpecSymbolDirective, LowerRegDirective, UpperRegDirective, NumberCheckDirective],
    exports: [ RegisterForm]      
})
export class RegisterModule { }