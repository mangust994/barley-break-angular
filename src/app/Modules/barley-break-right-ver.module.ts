import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BarleyBreakRVComponent }   from '../Components/barley-break-right-ver.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { 
	IgxDragDirective,
	IgxDropDirective,
	IgxDragDropModule,
	IgxDialogModule
 } from "igniteui-angular";

@NgModule({
    imports:      [ BrowserModule, FormsModule, IgxDragDropModule, BrowserAnimationsModule, IgxDialogModule],
    declarations: [ BarleyBreakRVComponent],
    exports: [ BarleyBreakRVComponent]       // экспортируем компонент
})
export class BarleyBreakRVModule { }