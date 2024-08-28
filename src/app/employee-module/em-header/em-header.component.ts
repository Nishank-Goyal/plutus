import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/commonService';
import { MainService } from 'src/services/main.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-em-header',
  templateUrl: './em-header.component.html',
  styleUrls: ['./em-header.component.scss']
})
export class EmHeaderComponent {
  constructor(private mainService:MainService,private router:Router,public commonService:CommonService){}
  headerOptions = [
    {
      path:'list',
      value:'Your Company ESOPs'
    },
    {
      path:'add-company',
      value:'Add Company'
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
