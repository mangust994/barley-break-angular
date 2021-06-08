import {Injectable} from '@angular/core';
import {BarleyBreakCanonDataService} from '../Data/barley-break-canon-data.service'

@Injectable()
export class BarleyBreakCanonService{

    constructor(private barleyBreakCanonDataService: BarleyBreakCanonDataService){}

    
    randCoord() : void {
        let masButtonsName = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', ' ']
        let currentButton;
        for (let num = 1; num <= 4; num++)
        {
            for(let num1 = 1; num1 <= 4; num1++)
            {
                let randomIndex = Math.floor(Math.random() * masButtonsName.length);
                currentButton = this.barleyBreakCanonDataService.buttons.find(button => button.name == masButtonsName[randomIndex])
                currentButton.coordX = num;
                currentButton.coordY = num1;
                masButtonsName.splice(randomIndex, 1);
            }
        }
        
        this.barleyBreakCanonDataService.numSteps = 0;
    }

    findNumber(coordX: number, coordY: number): string {
        return this.barleyBreakCanonDataService.buttons.find(button => button.coordX === coordX && button.coordY == coordY).name;
    }
    swapNumber(coordX: number, coordY: number): void{
        let currentButton = this.barleyBreakCanonDataService.buttons.find(button => button.coordX === coordX && button.coordY == coordY);
        let spaceButton = this.barleyBreakCanonDataService.buttons.find(button => button.name == ' ');
        if(currentButton.coordX + 1 ==  spaceButton.coordX && currentButton.coordY ==  spaceButton.coordY
            || currentButton.coordX - 1 ==  spaceButton.coordX && currentButton.coordY ==  spaceButton.coordY
            || currentButton.coordX ==  spaceButton.coordX && currentButton.coordY + 1 ==  spaceButton.coordY
            || currentButton.coordX ==  spaceButton.coordX && currentButton.coordY - 1 ==  spaceButton.coordY
            )
            {
                let rewriteVarCoordX = currentButton.coordX;
                let rewriteVarCoordY = currentButton.coordY;
                currentButton.coordX = spaceButton.coordX;
                currentButton.coordY = spaceButton.coordY;
                spaceButton.coordX = rewriteVarCoordX;
                spaceButton.coordY = rewriteVarCoordY;
                this.barleyBreakCanonDataService.numSteps++;
            }
    }
    checkWin(): boolean {
        let resultCheck = true;
        for (let num = 0; num < this.barleyBreakCanonDataService.buttons.length -1; num++) {
            if(  this.barleyBreakCanonDataService.buttons[num].coordX == Math.ceil(Number(this.barleyBreakCanonDataService.buttons[num].name)/4) 
            && this.barleyBreakCanonDataService.buttons[num].coordY % 4 == Number(this.barleyBreakCanonDataService.buttons[num].name) % 4)
            {
                resultCheck &&= true;
            }
            else
            {
                resultCheck &&=  false;
            }
         }
         return resultCheck;
    }


    getNumSteps(): number{
        return this.barleyBreakCanonDataService.numSteps;
    }
}