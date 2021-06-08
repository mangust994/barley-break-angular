import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { TestChatComponent }   from '../Components/test-chat.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ TestChatComponent],
    exports: [ TestChatComponent]    
})
export class TestChatModule { }