import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CONSTANTS } from 'src/constants';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  loginForm: FormGroup;
  subscription: Subscription
  constructor(private fb: FormBuilder, private router: ActivatedRoute, private route: Router, private authService: AuthService) {
    this.subscription = this.router.queryParams.subscribe(async (res:any) => {
      if(res.code){
       let response:any =  await this.authService.googleLogin({code:res.code,redirect_uri:CONSTANTS.environment.redirectingUrl,loginType:1}).toPromise();
       localStorage.setItem('token', response.token);
       this.route.navigateByUrl('/main');
      }
    })
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(CONSTANTS.REGEX.EMAIL)])],
      password: ['', Validators.required]
    })
  }


  async submit() {
    if (this.loginForm.valid) {
      let response: any = await this.authService.login(this.loginForm.value).toPromise();
      localStorage.setItem('token', response.token);
      this.route.navigateByUrl('/main');
    } else {
      Object.keys(this.loginForm.controls).forEach(key => this.loginForm.controls[key].markAsTouched({ onlySelf: true }))
    }
  }

  signInWithGoogle() {
    return window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CONSTANTS.environment.googleClientId}&scope=openid profile email&redirect_uri=${CONSTANTS.environment.redirectingUrl}`
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
