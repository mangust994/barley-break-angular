import {ButtonNumber} from "./button-number"
import {UserModel} from "./user-model"

export class GameModel { 
    id: number;
    buttons: ButtonNumber[];
    users: UserModel[];
    status: boolean;
    route: string;
}