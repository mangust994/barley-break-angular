import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeaderComponent }   from '../Components/header.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule ],
    declarations: [ HeaderComponent],
    exports: [ HeaderComponent]      
})
export class HeaderModule { }