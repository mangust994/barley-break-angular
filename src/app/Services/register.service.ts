import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {AutorisationDataService} from '../Data/authorisation-data.service'
import { RegisterModel } from '../Models/register-model';

@Injectable()
export class RegistrationService {
    constructor(private autorisationDataService: AutorisationDataService) { }

    register(email: string, login: string, password: string, confirmPassword: string)  {
        let registerModel : RegisterModel = new RegisterModel;
        registerModel.email = email;
        registerModel.login = login;
        registerModel.password = password;
        registerModel.confirmPassword = confirmPassword;
        this.autorisationDataService.Register(registerModel);
    }
}