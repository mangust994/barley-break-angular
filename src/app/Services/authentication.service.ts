import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AutorisationDataService} from '../Data/authorisation-data.service'
import { LoginModel } from '../Models/login-model';
import {TokenModel} from '../Models/token-model';

@Injectable()
export class AuthenticationService {
    constructor(private autorisationDataService: AutorisationDataService) { }

    login(username: string, password: string)  {
        let loginModel : LoginModel = new LoginModel;
        loginModel.email = username;
        loginModel.password = password;
        this.autorisationDataService.Login(loginModel)
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}