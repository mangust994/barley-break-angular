import * as signalR from "@microsoft/signalr";
import {ButtonNumber} from "../Models/button-number";
import { GameModel } from "../Models/game-model";
import { Router } from '@angular/router';
import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { TokenModel } from "../Models/token-model";
import {GameDataService} from "../Data/game-data.service"

@Injectable()
export class BarleyBreakRightVerDataService  {

    constructor(private router: Router, private http: HttpClient, private gameService: GameDataService) {
        
} 

    connection: any;
    currentGame : GameModel;
    allButtons: ButtonNumber[]
    connectionId: string;
    userName1: string;
    userName2: string;
    buttonsPlayerOne: ButtonNumber[] = 
    [
        {id: 1, currentPosition: 1, name: '1'},
        {id: 2,currentPosition: 2, name: '2'},
        {id: 3,currentPosition: 3, name: '3'},
        {id: 4,currentPosition: 4, name: '4'},
        {id: 5,currentPosition: 5, name: '5'},
        {id: 6,currentPosition: 6, name: '6'},
        {id: 7,currentPosition: 7, name: '7'},
        {id: 8,currentPosition: 8, name: '8'},
        {id: 9,currentPosition: 9, name: '9'},
        {id: 10,currentPosition: 10, name: '10'},
        {id: 11,currentPosition: 11, name: '11'},
        {id: 12,currentPosition: 12, name: '12'},
        {id: 13,currentPosition: 13, name: '13'},
        {id: 14,currentPosition: 14, name: '14'},
        {id: 15,currentPosition: 15, name: '15'},
        {id: 16,currentPosition: 16, name: ' '}
    ];
    buttonsPlayerTwo: ButtonNumber[] = 
    [
        {id : 17, currentPosition: 1, name: '1'},
        {id : 18, currentPosition: 2, name: '2'},
        {id : 19, currentPosition: 3, name: '3'},
        {id : 20, currentPosition: 4, name: '4'},
        {id : 21, currentPosition: 5, name: '5'},
        {id : 22, currentPosition: 6, name: '6'},
        {id : 23, currentPosition: 7, name: '7'},
        {id : 24, currentPosition: 8, name: '8'},
        {id : 25, currentPosition: 9, name: '9'},
        {id : 26, currentPosition: 10, name: '10'},
        {id : 27, currentPosition: 11, name: '11'},
        {id : 28, currentPosition: 12, name: '12'},
        {id : 29, currentPosition: 13, name: '13'},
        {id : 30, currentPosition: 14, name: '14'},
        {id : 31, currentPosition: 15, name: '15'},
        {id : 32, currentPosition: 16, name: ' '}
        
    ];

    winButtonsPlayerOne: ButtonNumber[] = 
    [
        {id : 33, currentPosition: 1, name: '1'},
        {id : 34, currentPosition: 2, name: '2'},
        {id : 35, currentPosition: 3, name: '3'},
        {id : 36, currentPosition: 4, name: '4'},
        {id : 37, currentPosition: 5, name: '5'},
        {id : 38, currentPosition: 6, name: '6'},
        {id : 39, currentPosition: 7, name: '7'},
        {id : 40, currentPosition: 8, name: '8'},
        {id : 41, currentPosition: 9, name: '9'},
        {id : 42, currentPosition: 10, name: '10'},
        {id : 43, currentPosition: 11, name: '11'},
        {id : 44, currentPosition: 12, name: '12'},
        {id : 45, currentPosition: 13, name: '13'},
        {id : 46, currentPosition: 14, name: '14'},
        {id : 47, currentPosition: 15, name: ' '},
        {id : 48, currentPosition: 16, name: '15'},
    ];

    winButtonsPlayerTwo: ButtonNumber[] = 
    [
        
        {id : 49, currentPosition: 1, name: '1'},
        {id : 50, currentPosition: 2, name: '2'},
        {id : 51, currentPosition: 3, name: '3'},
        {id : 52, currentPosition: 4, name: '4'},
        {id : 53, currentPosition: 5, name: '5'},
        {id : 54, currentPosition: 6, name: '6'},
        {id : 55, currentPosition: 7, name: '7'},
        {id : 56, currentPosition: 8, name: '8'},
        {id : 57, currentPosition: 9, name: '9'},
        {id : 58, currentPosition: 10, name: '10'},
        {id : 59, currentPosition: 11, name: '11'},
        {id : 60, currentPosition: 12, name: '12'},
        {id : 61, currentPosition: 13, name: '13'},
        {id : 62, currentPosition: 14, name: '14'},
        {id : 63, currentPosition: 15, name: ' '},
        {id : 64, currentPosition: 16, name: '15'}
    ];

    startData() {
        this.connection.send("takeCurrentGame", this.router.url);
    }
    

    Init(): void {
        let token : TokenModel = JSON.parse(localStorage.getItem("currentUser"));
        let tokenRV = 'Bearer ' + token.access_token;
        const connection = new signalR.HubConnectionBuilder()  
        .configureLogging(signalR.LogLevel.Trace)
        .withUrl('https://barleybreakapi20210607155422.azurewebsites.net/game', {
            accessTokenFactory: () => {
                return token.access_token},
            skipNegotiation: true,
            transport: 1
        }).withAutomaticReconnect()
        .build();  
        this.connection = connection;
        console.log(connection)
        
    connection.start().then(function () {  
    console.log('SignalR Connected!');  
    }).catch(function (err) {  
    return console.error(err.toString());
    
    });
    };
    shuffle() {
        this.connection.send("takeCurrentGame", this.router.url);
        this.buttonsPlayerOne.sort(() => Math.random() - 0.5);
        this.buttonsPlayerTwo.sort(() => Math.random()- 0.5);
        this.winButtonsPlayerOne.sort(() => Math.random() - 0.5);
        this.winButtonsPlayerTwo.sort(() => Math.random()- 0.5);
        if(this.currentGame == undefined || this.currentGame == null)
        {
            console.log('ya tut');
            setTimeout(() => {this.connection.send("changeButtonPosition", this.buttonsPlayerOne, this.buttonsPlayerTwo, this.winButtonsPlayerOne, this.winButtonsPlayerTwo, this.currentGame)}, 5000);
        }
        else
        {this.connection.send("changeButtonPosition", this.buttonsPlayerOne, this.buttonsPlayerTwo, this.winButtonsPlayerOne, this.winButtonsPlayerTwo, this.currentGame);}
        
    }
    checkConnection(){
        this.connection.on('thisConnectionId', (connection : any) => this.connectionId = connection)
    }

    checkPlayers(){
        this.connection.on('thisGame', (game : any) => {this.currentGame = game, 
            this.userName1 = game.users[0].userName, 
            this.userName2 = game.users[1].userName,
            this.allButtons = game.buttons;
        }
        )
        
    }

    checkButtons(): void {
        this.connection.on("takeNewPosition", (buttonsPlayerOne: ButtonNumber[], buttonsPlayerTwo: ButtonNumber[], 
            winButtonsPlayerOne: ButtonNumber[], winButtonsPlayerTwo: ButtonNumber[]) => {
        for(let i = 0; i < buttonsPlayerOne.length; i++)
        {
            this.buttonsPlayerOne[i].currentPosition = buttonsPlayerOne[i].currentPosition;
            this.buttonsPlayerOne[i].name = buttonsPlayerOne[i].name;
        }
        for(let i = 0; i < buttonsPlayerOne.length; i++)
        {
            this.buttonsPlayerTwo[i].currentPosition = buttonsPlayerTwo[i].currentPosition;
            this.buttonsPlayerTwo[i].name = buttonsPlayerTwo[i].name;
        }
        for(let i = 0; i < winButtonsPlayerOne.length; i++)
        {
            this.winButtonsPlayerOne[i].currentPosition = winButtonsPlayerOne[i].currentPosition;
            this.winButtonsPlayerOne[i].name = winButtonsPlayerOne[i].name;
        }
        for(let i = 0; i < winButtonsPlayerTwo.length; i++)
        {
            this.winButtonsPlayerTwo[i].currentPosition = winButtonsPlayerTwo[i].currentPosition;
            this.winButtonsPlayerTwo[i].name = winButtonsPlayerTwo[i].name;
        }
    })
    }

    checkPlayer(){
        this.connection.send("takeCurrentGame", this.router.url);
        this.connection.send("changeButtonPosition", this.buttonsPlayerOne, this.buttonsPlayerTwo, this.winButtonsPlayerOne, this.winButtonsPlayerTwo, this.currentGame);
    }

    loadGame(){
        this.buttonsPlayerOne = undefined;
        this.buttonsPlayerTwo = undefined;
        this.winButtonsPlayerOne = undefined;
        this.winButtonsPlayerTwo = undefined;
        this.buttonsPlayerOne = [];
        this.buttonsPlayerTwo = [];
        this.winButtonsPlayerOne = [];
        this.winButtonsPlayerTwo = [];
        console.log(this.currentGame);
        this.gameService.GetGame(this.router.url).then((game) => {
            for (let index = 0; index < 16; index++) {
                this.buttonsPlayerOne.push(game.buttons[index]);
                this.buttonsPlayerOne.sort((a : ButtonNumber, b : ButtonNumber) => {return a.currentPosition - b.currentPosition})
            }
            for (let index = 16; index < 32; index++) {
                this.buttonsPlayerTwo.push(game.buttons[index]);
                this.buttonsPlayerTwo.sort((a : ButtonNumber, b : ButtonNumber) => {return a.currentPosition - b.currentPosition})
            }
            for (let index = 32; index < 48; index++) {
                this.winButtonsPlayerOne.push(game.buttons[index]);
                this.winButtonsPlayerOne.sort((a : ButtonNumber, b : ButtonNumber) => {return a.currentPosition - b.currentPosition})
            }
            for (let index = 48; index < 64; index++) {
                this.winButtonsPlayerTwo.push(game.buttons[index]);
                this.winButtonsPlayerTwo.sort((a : ButtonNumber, b : ButtonNumber) => {return a.currentPosition - b.currentPosition})
            }
            this.connection.send("changeButtonPosition", this.buttonsPlayerOne, this.buttonsPlayerTwo, this.winButtonsPlayerOne, this.winButtonsPlayerTwo, this.currentGame);
        });
    }

    sendButtonPosition(): void {
        this.connection.send("changeButtonPosition", this.buttonsPlayerOne, this.buttonsPlayerTwo, this.winButtonsPlayerOne, this.winButtonsPlayerTwo, this.currentGame);
    }

    sendCurrentGame(): void {
        this.connection.send("takeCurrentGame", this.router.url);
    }
    sendConnectionId() : void {
        this.connection.send("takeId", this.currentGame);
    }
}