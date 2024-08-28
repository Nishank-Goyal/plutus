import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent {
counter = 10;
constructor(private router:Router,private route:ActivatedRoute,private authService:AuthService){
  
  let interval = setInterval(()=>{
    this.counter--;
    if(this.counter==0){
      clearInterval(interval);
      this.route.params.subscribe(async (res:any)=>{
        let response:any = await this.authService.verifyEmail(res).toPromise();
        console.log(response);
        localStorage.setItem('token',response.token)
        this.router.navigateByUrl('/main');
      })
    }
    console.log(this.counter);
    
  },1000)
}
}
