import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonService } from 'src/services/commonService';
import { MainComponentComponent } from './main-component/main-component.component';

const routes:Routes =[
  {
    path:'',
    component:MainComponentComponent,
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'employee',
        loadChildren:()=>import('../employee-module/employee-module.module').then(m=>m.EmployeeModuleModule)
      },
      {
        path:'investor',
        loadChildren:()=>import('../investor-module/investor-module.module').then(m=>m.InvestorModuleModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    DashboardComponent,
    MainComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class MainModuleModule { 
  constructor(){
   
  }
}
