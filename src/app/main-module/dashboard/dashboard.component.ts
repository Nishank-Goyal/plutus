import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/services/commonService';
import { MainService } from 'src/services/main.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private mainService:MainService,private router:Router,public commonService:CommonService){}
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

  openAdmin(){
    this.router.navigateByUrl('/admin');
  }
}
