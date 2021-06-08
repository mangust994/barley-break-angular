import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HeroSectionComponent }   from '../Components/hero-section.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ HeroSectionComponent],
    exports: [ HeroSectionComponent]       // экспортируем компонент
})
export class HeroSectionModule { }