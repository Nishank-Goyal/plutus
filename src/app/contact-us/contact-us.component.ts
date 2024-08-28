import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CONSTANTS } from 'src/constants';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constactForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.constactForm = this.fb.group({
      role: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(CONSTANTS.REGEX.EMAIL)])],
      phone: ['', Validators.compose([Validators.required, Validators.pattern(CONSTANTS.REGEX.PHONE)])],
      message: ['', Validators.required]
    })
  }

  async submit() {
    if (this.constactForm.valid) {
      await this.authService.constactUs(this.constactForm.value).toPromise();
      this.constactForm.reset();
    } else {
      Object.keys(this.constactForm.controls).forEach(key => this.constactForm.controls[key].markAsTouched({ onlySelf: true }));
    }
  }

}
