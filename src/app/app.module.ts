import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {AppComponent}  from "./app.component";
import {FooterModule} from "./Modules/footer.module";
import {HeroSectionModule} from "./Modules/hero-section.module";
import {HeaderModule} from "./Modules/header.module";
import {BarleyBreakCanonModule} from "./Modules/barley-break-canon.module";
import {BarleyBreakCanonDataService} from "./Data/barley-break-canon-data.service"
import {BarleyBreakRightVerDataService} from "./Data/barley-break-right-ver-data.service"
import {BarleyBreakRVModule} from "./Modules/barley-break-right-ver.module";
import {TestChatModule} from "./Modules/test-chat.module";
import {AppRoutingModule} from "./Modules/app-routing.module";
import {APP_BASE_HREF} from '@angular/common';
import { CommonModule } from '@angular/common';  
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AutorisationDataService} from './Data/authorisation-data.service';
import {AuthenticationService} from './Services/authentication.service'
import { HttpClientModule } from '@angular/common/http';
import {RegistrationService} from './Services/register.service'
import {FindGameModule} from './Modules/find-game.module';
import { GameDataService } from './Data/game-data.service';



@NgModule({
    imports: [ HttpClientModule, NgbModule, CommonModule, AppRoutingModule, BrowserModule, HeaderModule, HeroSectionModule, BarleyBreakCanonModule, BarleyBreakRVModule,
        TestChatModule, FooterModule, FormsModule, FindGameModule ],
    declarations: [ AppComponent],
    providers: [ {provide: APP_BASE_HREF, useValue: '/'}, BarleyBreakRightVerDataService,  BarleyBreakCanonDataService,  AutorisationDataService, AuthenticationService, RegistrationService, GameDataService],
    bootstrap: [AppComponent]
})
export class AppModule { }