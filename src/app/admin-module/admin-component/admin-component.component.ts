import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/commonService';
import { MainService } from 'src/services/main.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.scss']
})
export class AdminComponentComponent {
  headerOptions = [
    {
      path:'employes',
      value:'Company ESOPs'
    },
    {
      path:'investors',
      value:'Investors'
    }
  ]
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
}
