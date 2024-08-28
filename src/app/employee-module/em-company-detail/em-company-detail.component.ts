import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatComponent } from 'src/app/common-module/chat/chat.component';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-em-company-detail',
  templateUrl: './em-company-detail.component.html',
  styleUrls: ['./em-company-detail.component.scss']
})
export class EmCompanyDetailComponent {
  records: Array<any> = [];
  companyId:string | undefined;
  constructor(private mainService: MainService, private router: ActivatedRoute, private modalService: NgbModal) {
    this.router.params.subscribe((res: any) => {
      this.getInvestorList(res.id);
      this.companyId = res.id;
    })
  }


  openModel() {
    this.modalService.open(ChatComponent, { centered: true, animation: true, size: 'lg' })
  }

  async getInvestorList(id: string) {
    let response: any = await this.mainService.getInvestorListForCompany({ companyId: id }).toPromise();
    this.records = response.data.records
  }

  async acceptRequest(_id:string){
    await this.mainService.acceptInvestorRequest({_id}).toPromise();
    this.companyId && this.getInvestorList(this.companyId);
  }
}
