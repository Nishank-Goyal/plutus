import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-create-investor',
  templateUrl: './create-investor.component.html',
  styleUrls: ['./create-investor.component.scss']
})
export class CreateInvestorComponent {
  form:FormGroup;
  constructor(private fb:FormBuilder,private mainService:MainService,private router:Router,private route:ActivatedRoute){
    this.form = this.fb.group({
    panUrl: ['',Validators.required],
    idProofUrl: ['',Validators.required],
    addressUrl: ['',Validators.required],
    bankAccountUrl: ['',Validators.required],
    incomeUrl: ['',Validators.required],
    subscription:['',Validators.required]
    })
    this.route.params.subscribe((res:any)=>{
      this.form.controls['subscription'].patchValue(res.subscriptionId)
    })
  }

  async submit(){
    if(this.form.valid){
      await this.mainService.createInvestorProfile(this.form.value).toPromise();
      this.form.reset();
      this.router.navigateByUrl('main/investor');
    }else{
      Object.keys(this.form.controls).forEach(key=>this.form.controls[key].markAsTouched({onlySelf:true}))
    }
  }

  async fileUpload(event:any,key:string){
    let formData = new FormData;
    formData.append('image',event.target.files[0]);
    formData.append('name',event.target.files[0].name);
    let response:any = await this.mainService.uploadFile(formData).toPromise();
    this.form.controls[key].patchValue(response.fileUrl); 
  }
}
