import { Component } from '@angular/core';
import {BarleyBreakCanonService } from '../Services/barley-break-canon.service';
import {BarleyBreakCanonDataService} from "../Data/barley-break-canon-data.service"


@Component({
    selector: 'barley-break',
    templateUrl: "./html/barley-break-canon.html",
    styleUrls: ["./styles/barley-break-canon.scss"],
    providers: [BarleyBreakCanonService]
})
export class BarleyBreakComponent { 
    constructor(private barleyBreakCanonService: BarleyBreakCanonService){}

    swapNumber(coordX: number, coordY: number): void{
        this.barleyBreakCanonService.swapNumber(coordX, coordY);
    }
    findNumberName(coordX: number, coordY: number) : string{
        return this.barleyBreakCanonService.findNumber(coordX, coordY);
    }
    randCoord() : void{
        this.barleyBreakCanonService.randCoord();
    }
    GetNumSteps(): number{
        return this.barleyBreakCanonService.getNumSteps();
    }
    checkWin() : boolean{
        return this.barleyBreakCanonService.checkWin();
    }
};