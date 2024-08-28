import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CONSTANTS } from 'src/constants';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-em-add-company',
  templateUrl: './em-add-company.component.html',
  styleUrls: ['./em-add-company.component.scss']
})
export class EmAddCompanyComponent {
applicationForm:FormGroup;
applicationFormSubmited = false;
documentFormSubmited=false;
activeForm='application';
documentForm:FormGroup;
AgreeMentForm:FormGroup;
stateList = CONSTANTS.STATES
constructor(private fb:FormBuilder,private toastrService:ToastrService,private mainService:MainService){
  this.applicationForm = this.fb.group({
    company:['', Validators.required],
    website:['',Validators.compose([Validators.required,Validators.pattern(CONSTANTS.REGEX.URL)])],
    companyEmail:['',Validators.compose([Validators.required,Validators.pattern(CONSTANTS.REGEX.EMAIL)])],
    addressLine1:['',Validators.required],
    addressLine2:[''],
    city:['',Validators.required],
    state:['',Validators.required],
    zipCode:['',Validators.required],
    country:['',Validators.required],
    addressProofUrl:[''],
    lastDateofESOPExcercise:['']
  });


  this.AgreeMentForm = this.fb.group({
    agreeTerms:['',Validators.required],
    agreeEmailUpdate:['',Validators.required]
  })

  this.documentForm = this.fb.group({
    grantLetterUrl:['',Validators.required],
    latestOptionStatusUrl:['',Validators.required],
    last409orFMVUrl:['',Validators.required],
    panUrl:['',Validators.required],
    AddarUrl:['',Validators.required]
  });
}

async sendEmailVerification(){
  if(this.applicationForm.controls['company'].invalid){
   throw this.toastrService.error('Please enter valid company name.','Error')
  }else if(this.applicationForm.controls['companyEmail'].invalid){
    throw this.toastrService.error('Please enter valid company email.','Error');
  }
  await this.mainService.sendEmailVerification({company:this.applicationForm.controls['company'].value,companyEmail:this.applicationForm.controls['companyEmail'].value}).toPromise();
}

uploadFormSubmit(){
  if(this.documentForm.valid){
    this.activeForm = 'agrement';
    this.documentFormSubmited =true;
  }else{
    Object.keys(this.documentForm.controls).forEach(key=>this.documentForm.controls[key].markAsTouched({onlySelf:true}));
  }
}

async submitAgreement(){
  if(this.AgreeMentForm.valid){
    console.log({...this.applicationForm.value,...this.AgreeMentForm.value,...this.documentForm.value});
    await this.mainService.submitCompanyForVerification({...this.applicationForm.value,...this.AgreeMentForm.value,...this.documentForm.value}).toPromise();
    this.applicationForm.reset();
    this.AgreeMentForm.reset();
    this.documentForm.reset();
  }else{
    Object.keys(this.AgreeMentForm.controls).forEach(key=>this.AgreeMentForm.controls[key].markAsTouched({onlySelf:true}));

  }
}

applicationFormSubmit(){
  if(this.applicationForm.valid){
    console.log(this.applicationForm.value);
    this.applicationFormSubmited = true;
    this.activeForm = 'upload';
  }else{
    Object.keys(this.applicationForm.controls).forEach(key=>this.applicationForm.controls[key].markAsTouched({onlySelf:true}));
  }
}


async fileUpload(event:any,formNumber:number,key:string){
  console.log(event.target.files[0]);
  
  let formData = new FormData;
  formData.append('image',event.target.files[0])
  formData.append('name',event.target.files[0].name)
  let response:any = await this.mainService.uploadFile(formData).toPromise();
  switch(formNumber){
    case 1:
      this.applicationForm.controls[key].patchValue(response.fileUrl);
      break;
    case 2:
      this.documentForm.controls[key].patchValue(response.fileUrl);
      break;
  }
}

onTabChange(index:number){
  if(index==2){
    if(this.applicationForm.valid&&this.applicationFormSubmited){
     return this.activeForm = 'upload';
    }
  }
  if(index==3){
    if(this.documentForm.valid&&this.documentFormSubmited){
     return this.activeForm = 'upload';
    }
  }
  return  this.activeForm='application';
}

}
