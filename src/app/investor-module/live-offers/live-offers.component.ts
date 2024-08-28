import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/commonService';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-live-offers',
  templateUrl: './live-offers.component.html',
  styleUrls: ['./live-offers.component.scss']
})
export class LiveOffersComponent {
  records:Array<any> = []
  constructor(private mainService:MainService,private router:Router,public commonService:CommonService){
    if(!this.commonService.investorProfile?._id){
      this.commonService.getInvestorProfile().then(res=>{
        if(!this.commonService.investorProfile?._id){
          this.router.navigateByUrl('main/investor/payment');
        }
      }).catch(err=>{
        console.log('Error :',err);
      })
    }
    this.getCompanyList()
  }
  async getCompanyList(){
    let response:any  = await this.mainService.getCompanyListForInvestor().toPromise();
    this.records =  response.data.records;
  }

  view(id:string){
    // if(this.commonService.userData.subscription){
      this.router.navigateByUrl(`main/investor/live-offers/${id}`)
    // }else{
    //   this.router.navigateByUrl(`main/investor/payment`)
    // }
  }


  async sendRequiest(data:any){
    await this.mainService.sendCompanyInvestment({companyId:data._id,reciverId:data.user[0]._id}).toPromise();
    this.getCompanyList()
  }
}
