import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {GameDataService} from "../Data/game-data.service";
import { GameModel } from '../Models/game-model';
import {FindGameService} from "../Services/find-game.service";



@Component({
    selector: 'find-game',
    templateUrl: "./html/find-game.html",
    styleUrls: ['./styles/find-game.scss'],
    providers: [FindGameService, GameDataService]
})
export class FindGameComponent { 
    constructor(private findgameService: FindGameService, private router: Router) {{

    }}
    findPlayer() {
        this.findgameService.findGame().then((data : any) => {
            if(data == undefined || data.length == 0 || data == null)
            {
                console.log('creating game..')
                this.findgameService.createGame();
                
            }
            else
            {
                console.log('search game..')
                this.findgameService.connectGame(data[0]);
            }});
    }
};