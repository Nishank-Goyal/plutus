import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-investor-detail',
  templateUrl: './investor-detail.component.html',
  styleUrls: ['./investor-detail.component.scss']
})
export class InvestorDetailComponent {
  record: any;

  constructor(private mainService:MainService,private route:ActivatedRoute,private sanitizer: DomSanitizer){
    this.route.params.subscribe((res:any)=>{
      this.getInvestorDetail(res.id);
    })
  }
  createSafeURL(unsafeUrl:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }
  async getInvestorDetail(id:string){
    let response:any = await this.mainService.getInvestorList({userId:id}).toPromise();
    this.record = response.records[0];
    console.log(this.record);
    
  }
}
