import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/commonService';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-em-company-list',
  templateUrl: './em-company-list.component.html',
  styleUrls: ['./em-company-list.component.scss']
})
export class EmCompanyListComponent {
  records:Array<any>=[];
  constructor(private mainService:MainService,private router:Router,private commonService:CommonService){
    if(this.commonService?.userData?._id){
      this.getRecords();
    }
    this.commonService.getChange().subscribe((res:any)=>{
      if(res.investor){
        this.getRecords();
      }
    })
  }
  async getRecords(){
    let response:any = await this.mainService.getUsersCompanyList({employe:true}).toPromise();
    this.records = response.data.records;
  }

  view(id:string){
    this.router.navigateByUrl(`/main/employee/list/${id}`);
  }
}
