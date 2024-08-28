import { CONSTANTS } from "src/constants";
import { HttpService } from "./https.service";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthService{
    constructor(private httpService:HttpService){}

    signUp(data:any){
        return this.httpService.post(CONSTANTS.APIS.AUTH_API.SIGN_UP,data)
    }


    login(data:any){
        return this.httpService.post(CONSTANTS.APIS.AUTH_API.LOGIN,data);
    }

    constactUs(data:any){
        return this.httpService.post(CONSTANTS.APIS.AUTH_API.CONSTACT_US,data);
    }

    googleLogin(data:any){
        return this.httpService.post(CONSTANTS.APIS.AUTH_API.GOOGLE_LOGIN,data);
    }

    verifyEmail(data:any){
        return this.httpService.post(CONSTANTS.APIS.AUTH_API.EMAIL_VERIFY,data);
    }
}