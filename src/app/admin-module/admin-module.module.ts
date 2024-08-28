import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvestorsComponent } from './investors/investors.component';
import { InvestorDetailComponent } from './investor-detail/investor-detail.component';

const routes:Routes = [
  {
    path:'',
    component:AdminComponentComponent,
    children:[
      {
        path:'',
        redirectTo:'employes',
        pathMatch:'full'
      },
      {
        path:'employes',
        component:UsersListComponent
      },
      {
        path:'employes/:id',
        component:UsersDetailComponent
      },
      {
        path:'investors',
        component:InvestorsComponent
      },

      {
        path:'investors/:id',
        component:InvestorDetailComponent
      },

    ]
  }
]

@NgModule({
  declarations: [
    AdminComponentComponent,
    UsersListComponent,
    UsersDetailComponent,
    InvestorsComponent,
    InvestorDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModuleModule { }
