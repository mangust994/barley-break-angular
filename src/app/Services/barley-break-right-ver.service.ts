import {Injectable} from '@angular/core';
import {BarleyBreakRightVerDataService} from '../Data/barley-break-right-ver-data.service'
import {GameDataService} from '../Data/game-data.service';
import {Router} from '@angular/router';

@Injectable()
export class BarleyBreakRightVerService{

    constructor(private barleyBreakRightVerDataService: BarleyBreakRightVerDataService, private gameService: GameDataService, private router: Router){}

    randCoord() : void {
        this.barleyBreakRightVerDataService.shuffle();
    }

    InitData() : void {
        this.barleyBreakRightVerDataService.Init();
        this.barleyBreakRightVerDataService.startData();
    }

    swapIconsHorisontal(dragIndex: number, dropIndex: number, numberPlayer: number) {
        let buttons;
        if(numberPlayer == 1)
        {   
            buttons = this.barleyBreakRightVerDataService.buttonsPlayerOne;
        }
        else
        {
            buttons = this.barleyBreakRightVerDataService.buttonsPlayerTwo;
        }
        const tempObj = buttons[dragIndex];
        const tempId = buttons[dragIndex].currentPosition;
        buttons[dragIndex].currentPosition = buttons[dropIndex].currentPosition;
        buttons[dropIndex].currentPosition = tempId;
        buttons.splice(dragIndex, 1);
        buttons.splice(dropIndex, 0, tempObj);
        this.barleyBreakRightVerDataService.sendButtonPosition();
    }
    swapIconsUp(dragIndex: number, dropIndex: number, numberPlayer: number) {
        let buttons;
        if(numberPlayer == 1)
        {   
            buttons = this.barleyBreakRightVerDataService.buttonsPlayerOne;
        }
        else
        {
            buttons = this.barleyBreakRightVerDataService.buttonsPlayerTwo;
        }
        const tempObj = buttons[dragIndex];
        const tempObj2 = buttons[dropIndex];
        const tempId = buttons[dragIndex].currentPosition;
        buttons[dragIndex].currentPosition = buttons[dropIndex].currentPosition;
        buttons[dropIndex].currentPosition = tempId;
        buttons.splice(dragIndex, 1);
        buttons.splice(dropIndex, 1);
        buttons.splice(dropIndex, 0, tempObj);
        buttons.splice(dragIndex, 0, tempObj2);
        this.barleyBreakRightVerDataService.sendButtonPosition();
    }
    swapIconsDown(dragIndex: number, dropIndex: number, numberPlayer: number) {
        let buttons;
        if(numberPlayer == 1)
        {   
            buttons = this.barleyBreakRightVerDataService.buttonsPlayerOne;
        }
        else
        {
            buttons = this.barleyBreakRightVerDataService.buttonsPlayerTwo;
        }
        const tempObj = buttons[dragIndex];
        const tempObj2 = buttons[dropIndex];
        const tempId = buttons[dragIndex].currentPosition;
        buttons[dragIndex].currentPosition = buttons[dropIndex].currentPosition;
        buttons[dropIndex].currentPosition = tempId;
        buttons[dropIndex] = tempObj;
        buttons[dragIndex] = tempObj2;
        this.barleyBreakRightVerDataService.sendButtonPosition();
    }

    checkThisGameFirstConnectionId() : boolean{
        var game = this.barleyBreakRightVerDataService.currentGame.conectionIdUserOne;
        if (game != null || game != undefined)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    

    checkPlayer(){
        this.barleyBreakRightVerDataService.checkPlayer();
    }

    saveGame(){
        this.gameService.GetGame(this.router.url).then((game) => {
            for (let index = 0; index <= this.barleyBreakRightVerDataService.buttonsPlayerOne.length; index++) {
                this.barleyBreakRightVerDataService.allButtons[index] = this.barleyBreakRightVerDataService.buttonsPlayerOne[index];
                
            }
            for (let index = 0; index <= this.barleyBreakRightVerDataService.buttonsPlayerTwo.length; index++) {
                this.barleyBreakRightVerDataService.allButtons[index + 16] = this.barleyBreakRightVerDataService.buttonsPlayerTwo[index];
            }
            for (let index = 0; index <= this.barleyBreakRightVerDataService.winButtonsPlayerOne.length; index++) {
                this.barleyBreakRightVerDataService.allButtons[index + 32] = this.barleyBreakRightVerDataService.winButtonsPlayerOne[index];
            }
            for (let index = 0; index <= this.barleyBreakRightVerDataService.winButtonsPlayerTwo.length - 1; index++) {
                this.barleyBreakRightVerDataService.allButtons[index + 48] = this.barleyBreakRightVerDataService.winButtonsPlayerTwo[index];
            }
            for (let index = 0; index < this.barleyBreakRightVerDataService.currentGame.buttons.length; index++) {
                this.barleyBreakRightVerDataService.currentGame.buttons[index].id = game.buttons[index].id;
                this.barleyBreakRightVerDataService.currentGame.buttons[index].currentPosition = this.barleyBreakRightVerDataService.allButtons[index].currentPosition;
                this.barleyBreakRightVerDataService.currentGame.buttons[index].name = this.barleyBreakRightVerDataService.allButtons[index].name;
            }
            console.log(this.barleyBreakRightVerDataService.allButtons);
            console.log(this.barleyBreakRightVerDataService.currentGame.buttons);
            this.gameService.UpdateGame(this.barleyBreakRightVerDataService.currentGame);
        });
    }

    loadGame(){
        this.barleyBreakRightVerDataService.loadGame();
    }

    sendConnectionId(){
        this.barleyBreakRightVerDataService.sendConnectionId();
    }

    checkButtons() {
        this.barleyBreakRightVerDataService.checkButtons();
    }
    checkPlayers() {
        this.barleyBreakRightVerDataService.checkPlayers();
    }
    checkConnectionId() {
        this.barleyBreakRightVerDataService.checkConnection();
    }
    getThisUserName()
    {   
        return this.barleyBreakRightVerDataService.connectionId;
    }
    getUserNameOne() : any{
        return this.barleyBreakRightVerDataService.userName1;
    }
    getUserNameTwo() : any{
        return this.barleyBreakRightVerDataService.userName2;
    }
    getUserEmailOne() : any{
        return this.barleyBreakRightVerDataService.userEmail1;
    }
    getUserEmailTwo() : any{
        return this.barleyBreakRightVerDataService.userEmail2;
    }
    getButtonsPlayerOne() : any[]{
        return this.barleyBreakRightVerDataService.buttonsPlayerOne;
    }
    getWinButtonsPlayerOne() : any[]{
        return this.barleyBreakRightVerDataService.winButtonsPlayerOne;
    }
    getButtonsPlayerTwo() : any[]{
        return this.barleyBreakRightVerDataService.buttonsPlayerTwo;
    }
    getWinButtonsPlayerTwo() : any[]{
        return this.barleyBreakRightVerDataService.winButtonsPlayerTwo;
    }
}