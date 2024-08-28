import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/commonService';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
constructor(private router:Router,private commonService:CommonService){
  this.commonService.getChange().subscribe(res=>{
    if(res?.investor){
      this.router.navigateByUrl(`main/investor`);
    }
  })
}
  openCompanyDetail(){
    this.router.navigateByUrl(`main/investor/create/${new Date().valueOf()}`)
  }
}
