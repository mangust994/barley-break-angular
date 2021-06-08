import {FindGameComponent} from '../Components/find-game.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ FindGameComponent],
    exports: [ FindGameComponent]       
})
export class FindGameModule { }