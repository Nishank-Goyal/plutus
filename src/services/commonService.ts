import { Injectable } from "@angular/core";
import { MainService } from "./main.service";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class CommonService{
    userData:any;
    investorProfile:any;
    private change = new Subject<any>();
    constructor(private mainService:MainService){}

    async getUserProfile(){
       let data:any = await this.mainService.getUserProfile({}).toPromise();
       this.userData = data.data;
       this.investorProfile = data.investor;
       this.setChange({investor:true})
    }


    async getInvestorProfile (){
        let data:any = await this.mainService.getInvestorProfile({userId:this.userData._id}).toPromise();
        this.investorProfile = data.data;
        return;
    }



    setChange(data: any) {
        this.change.next(data);
    }

    getChange() {
        return this.change.asObservable();
    }

}