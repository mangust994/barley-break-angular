import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BarleyBreakComponent }   from '../Components/barley-break-canon.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ BarleyBreakComponent],
    exports: [ BarleyBreakComponent]       // экспортируем компонент
})
export class BarleyBreakCanonModule { }