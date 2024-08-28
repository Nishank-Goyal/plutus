import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.scss']
})
export class UsersDetailComponent {
  record: any;
  form:FormGroup
  companyId:string | undefined;
  constructor(private modalService:NgbModal,private fb:FormBuilder,private mainService: MainService, private router: ActivatedRoute,private sanitizer: DomSanitizer) {
    this.router.params.subscribe(async (res: any) => {
      this.companyId = res.id
      await this.getRecords()
    })

    this.form = this.fb.group({
      stockPrice: ['', Validators.required],
      offerPrice: ['', Validators.required]
    })
  }


  async getRecords() {
    let response: any = await this.mainService.getUsersCompanyList({companyId:this.companyId}).toPromise();
    this.record = response.data.records[0];
    console.log(this.record);
  }

  createSafeURL(unsafeUrl:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }

  async verifyCompany(data:any){
    this.modalService.open(data,{centered:true,animation:true})
  }

  async submit() {
    if (this.form.valid) {
      await this.mainService.verifyUserCompany({ companyId:this.companyId, ...this.form.value }).toPromise();
      this.record['companyVerification'] = true;
      this.form.reset();
      this.closeMdel();
    } else {
      Object.keys(this.form.controls).forEach(key => this.form.controls[key].markAsTouched({ onlySelf: true }));
    }

  }


  closeMdel() {
    this.modalService.dismissAll();
  }
}
