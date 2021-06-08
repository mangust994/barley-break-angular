import { HttpClient} from '@angular/common/http';
import {RegisterModel} from "../Models/register-model";
import {LoginModel} from "../Models/login-model";
import {UserModel} from "../Models/user-model";
import {Observable} from 'rxjs';
import {TokenModel} from '../Models/token-model';
import { Injectable } from '@angular/core';
import { GameModel } from '../Models/game-model';
import { waitForDebugger } from 'node:inspector';

@Injectable()
export class GameDataService {

    constructor(private http: HttpClient) {
}

    GetFreeGames() : any
    {
        return this.http.get('https://barleybreakapi20210607155422.azurewebsites.net/api/Game/Free').toPromise();
    }
    GetGames() : any
    {
        return this.http.get('https://barleybreakapi20210607155422.azurewebsites.net/api/Game/').toPromise();
    }

    GetGame(route: string) : any
    {
        return this.http.get('https://barleybreakapi20210607155422.azurewebsites.net/api/Game' + route).toPromise();
    }

    CreateNemGame(model : GameModel) : void
    {
        this.http.post('https://barleybreakapi20210607155422.azurewebsites.net/api/Game/', model).subscribe();
    }

    UpdateGame(model : GameModel) : void
    {
        this.http.put('https://barleybreakapi20210607155422.azurewebsites.net/api/Game/', model).toPromise();
    }
}