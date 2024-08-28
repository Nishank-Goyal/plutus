import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/services/main.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  records: Array<any> = [];
  form: FormGroup;
  selectedData: any;
  constructor(private mainService: MainService, private router: Router, private fb: FormBuilder, private modalService: NgbModal) {
    this.form = this.fb.group({
      stockPrice: ['', Validators.required],
      offerPrice: ['', Validators.required]
    })
    this.getRecords();
  }
  async getRecords() {
    let response: any = await this.mainService.getUsersCompanyList().toPromise();
    this.records = response.data.records;
  }

  view(id: string) {
    this.router.navigateByUrl(`/admin/employes/${id}`);
  }

  async verifyCompany(data: any, index: number, component: any) {
    this.selectedData = data;
    this.modalService.open(component, { centered: true, animation: true })

  }

  async submit() {
    if (this.form.valid) {
      await this.mainService.verifyUserCompany({ ...this.selectedData, ...this.form.value }).toPromise();
      await this.getRecords();
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
