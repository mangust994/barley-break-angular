import { HttpClient, HttpHeaders} from '@angular/common/http';
import {RegisterModel} from "../Models/register-model";
import {LoginModel} from "../Models/login-model";
import {UserModel} from "../Models/user-model";
import {Observable} from 'rxjs';
import {TokenModel} from '../Models/token-model';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class AutorisationDataService {
    user: UserModel;
constructor(private http: HttpClient) {}
    token : TokenModel;

    Register(registerInfo : RegisterModel) : void{
        this.http.post('https://barleybreakapi20210607155422.azurewebsites.net/api/Account/Register', registerInfo).subscribe();
    }

    Login(loginInfo : LoginModel) : any
    {
        this.http.post('https://barleybreakapi20210607155422.azurewebsites.net/api/Account/Login', loginInfo).subscribe(
            (data: any) => {this.token = data; localStorage.setItem('currentUser', JSON.stringify(this.token));});
        
    }

    UserInfo(token : string)
    {
        let tokenRV = 'Bearer ' + token
        const myHeaders = new HttpHeaders().set('Authorization', tokenRV);
        return this.http.get('https://barleybreakapi20210607155422.azurewebsites.net/api/Account', {headers: myHeaders}).toPromise();
    }
}