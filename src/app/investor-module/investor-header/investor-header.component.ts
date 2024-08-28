import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/commonService';
import { MainService } from 'src/services/main.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-investor-header',
  templateUrl: './investor-header.component.html',
  styleUrls: ['./investor-header.component.scss']
})
export class InvestorHeaderComponent {
  constructor(public commonService:CommonService, private router:Router,private mainService:MainService){}

  headerOptions = [
    {
      path:'live-offers',
      value:'Live Offres'
    },
    {
      path:'investments',
      value:'Your Investments'
    }
  ]

  logoutConfirmModel(){
    Swal.fire({
      title: 'Do you want to logout?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        await this.mainService.logout().toPromise();
        localStorage.clear();
        this.router.navigateByUrl('/');
      } 
    })
  }
}
