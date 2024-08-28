import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/services/commonService';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-investor-component',
  templateUrl: './investor-component.component.html',
  styleUrls: ['./investor-component.component.scss']
})
export class InvestorComponentComponent {
  constructor(private mainService:MainService,private commonService:CommonService,private router:Router){
    
  }
}
