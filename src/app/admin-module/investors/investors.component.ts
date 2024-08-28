import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-investors',
  templateUrl: './investors.component.html',
  styleUrls: ['./investors.component.scss']
})
export class InvestorsComponent {
  records:Array<any> = [];

  constructor(private mainService:MainService, private router:Router){
    this.getInVestorList()
  }


  async getInVestorList(){
    let response:any = await this.mainService.getInvestorList({}).toPromise();
    console.log(response.records);
    this.records =response.records;
  }

  view(id:string){
    this.router.navigateByUrl(`/admin/investors/${id}`);

  }
}
