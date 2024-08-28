import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmDashboardComponent } from './em-dashboard/em-dashboard.component';
import { EmHeaderComponent } from './em-header/em-header.component';
import { EmAddCompanyComponent } from './em-add-company/em-add-company.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';
import { RouterModule, Routes } from '@angular/router';
import { EmCompanyListComponent } from './em-company-list/em-company-list.component';
import { EmCompanyDetailComponent } from './em-company-detail/em-company-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModuleModule } from '../common-module/common-module.module';
import { ChatComponent } from '../common-module/chat/chat.component';

const routes:Routes = [
{
  path:'',
  component:EmployeeComponentComponent,
  children:[
    {
      path:'',
      redirectTo:'list',
      pathMatch:'full'
    },
    {
      path:'add-company',
      component:EmAddCompanyComponent
    },
    {
      path:'list',
      component:EmCompanyListComponent
    },
    {
      path:'list/:id',
      component:EmCompanyDetailComponent
    },
    {
      path:'list/:id/chat/:chatId/:reciverId',
      component:ChatComponent
    }
  ]
}
];


@NgModule({
  declarations: [
    EmDashboardComponent,
    EmHeaderComponent,
    EmAddCompanyComponent,
    EmployeeComponentComponent,
    EmCompanyListComponent,
    EmCompanyDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    CommonModuleModule
  ]
})
export class EmployeeModuleModule { }
