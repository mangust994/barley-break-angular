import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AutorisationDataService} from '../Data/authorisation-data.service'
import { RegisterModel } from '../Models/register-model';
import { TokenModel } from '../Models/token-model';
import {GameDataService} from '../Data/game-data.service';
import { GameModel } from '../Models/game-model';
import {ButtonNumber} from '../Models/button-number'
import {Route, Router} from '@angular/router'
import {routes} from '../Models/routes'
import {BarleyBreakRVComponent} from '../Components/barley-break-right-ver.component'
import {BarleyBreakRightVerDataService} from '../Data/barley-break-right-ver-data.service'
import { UserModel } from '../Models/user-model';

@Injectable()
export class FindGameService  {
    games: GameModel[] = [];
    token: TokenModel;
    route: string;
    constructor(private gameDataService: GameDataService, 
        private barleyBreakRightVerDataService: BarleyBreakRightVerDataService, 
        private authService: AutorisationDataService,
        private router: Router) { }

    createGame() : any  {
        this.token = JSON.parse(localStorage.getItem("currentUser"));
        let game : GameModel = new GameModel();
        this.gameDataService.GetGames().then( (data :any) => {
        this.games = data;
        console.log('then ' + data)
        game.status = true;
        game.buttons = this.addButtons();
        console.log(this.games)
        if( this.games[this.games.length-1] == undefined)
        {
            game.route = '/bar-break1';
        }
        else
        {
            game.route = '/bar-break' + this.games[this.games.length-1].id;
        }
        this.authService.UserInfo(this.token.access_token).then((data : any) => 
        {game.users = [data], console.log(data), this.gameDataService.CreateNemGame(game), this.route = game.route, this.router.navigate(['/' + this.route]);}, )
        
        }
        )
    }

    findGame() {
        return this.gameDataService.GetFreeGames()
    }

    connectGame(game : GameModel) {
        this.token = JSON.parse(localStorage.getItem("currentUser"));
        this.authService.UserInfo(this.token.access_token).then(
            (data : any) => {
                game.status = false;
                game.users.push(data);
                this.gameDataService.UpdateGame(game);
                this.router.navigate(['/' + game.route])
            }
        );
        
    }


    addButtons(){
        return ButtonNumber[64] = 
        [
        {id : 0, currentPosition: 1, name: '1'},
        {id : 0, currentPosition: 2, name: '2'},
        {id : 0, currentPosition: 3, name: '3'},
        {id : 0, currentPosition: 4, name: '4'},
        {id : 0, currentPosition: 5, name: '5'},
        {id : 0, currentPosition: 6, name: '6'},
        {id : 0, currentPosition: 7, name: '7'},
        {id : 0, currentPosition: 8, name: '8'},
        {id : 0, currentPosition: 9, name: '9'},
        {id : 0, currentPosition: 10, name: '10'},
        {id : 0, currentPosition: 11, name: '11'},
        {id : 0, currentPosition: 12, name: '12'},
        {id : 0, currentPosition: 13, name: '13'},
        {id : 0, currentPosition: 14, name: '14'},
        {id : 0, currentPosition: 15, name: '15'},
        {id : 0, currentPosition: 16, name: ' '},
        {id : 0, currentPosition: 1, name: '1'},
        {id : 0, currentPosition: 2, name: '2'},
        {id : 0, currentPosition: 3, name: '3'},
        {id : 0, currentPosition: 4, name: '4'},
        {id : 0, currentPosition: 5, name: '5'},
        {id : 0, currentPosition: 6, name: '6'},
        {id : 0, currentPosition: 7, name: '7'},
        {id : 0, currentPosition: 8, name: '8'},
        {id : 0, currentPosition: 9, name: '9'},
        {id : 0, currentPosition: 10, name: '10'},
        {id : 0, currentPosition: 11, name: '11'},
        {id : 0, currentPosition: 12, name: '12'},
        {id : 0, currentPosition: 13, name: '13'},
        {id : 0, currentPosition: 14, name: '14'},
        {id : 0, currentPosition: 15, name: '15'},
        {id : 0, currentPosition: 16, name: ' '},
        {id : 0, currentPosition: 1, name: '1'},
        {id : 0, currentPosition: 2, name: '2'},
        {id : 0, currentPosition: 3, name: '3'},
        {id : 0, currentPosition: 4, name: '4'},
        {id : 0, currentPosition: 5, name: '5'},
        {id : 0, currentPosition: 6, name: '6'},
        {id : 0, currentPosition: 7, name: '7'},
        {id : 0, currentPosition: 8, name: '8'},
        {id : 0, currentPosition: 9, name: '9'},
        {id : 0, currentPosition: 10, name: '10'},
        {id : 0, currentPosition: 11, name: '11'},
        {id : 0, currentPosition: 12, name: '12'},
        {id : 0, currentPosition: 13, name: '13'},
        {id : 0, currentPosition: 14, name: '14'},
        {id : 0, currentPosition: 15, name: ' '},
        {id : 0, currentPosition: 16, name: '15'},
        {id : 0, currentPosition: 1, name: '1'},
        {id : 0, currentPosition: 2, name: '2'},
        {id : 0, currentPosition: 3, name: '3'},
        {id : 0, currentPosition: 4, name: '4'},
        {id : 0, currentPosition: 5, name: '5'},
        {id : 0, currentPosition: 6, name: '6'},
        {id : 0, currentPosition: 7, name: '7'},
        {id : 0, currentPosition: 8, name: '8'},
        {id : 0, currentPosition: 9, name: '9'},
        {id : 0, currentPosition: 10, name: '10'},
        {id : 0, currentPosition: 11, name: '11'},
        {id : 0, currentPosition: 12, name: '12'},
        {id : 0, currentPosition: 13, name: '13'},
        {id : 0, currentPosition: 14, name: '14'},
        {id : 0, currentPosition: 15, name: ' '},
        {id : 0, currentPosition: 16, name: '15'}];
    }
}