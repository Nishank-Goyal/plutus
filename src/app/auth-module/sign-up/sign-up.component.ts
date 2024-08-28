import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANTS } from 'src/constants';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.pattern(CONSTANTS.REGEX.EMAIL)])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(CONSTANTS.REGEX.PASSWORD)])],
      country: ['', Validators.required]
    })
  }

  async submit() {
    if (this.signUpForm.valid) {
      let response = await this.authService.signUp(this.signUpForm.value).toPromise();
      this.router.navigateByUrl('/auth');
    } else {
      Object.keys(this.signUpForm.controls).forEach(key => this.signUpForm.controls[key].markAsTouched({ onlySelf: true }));
    }
  }


  signInWithGoogle() {
    return window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CONSTANTS.environment.googleClientId}&scope=openid profile email&redirect_uri=${CONSTANTS.environment.redirectingUrl}`
  }
}
