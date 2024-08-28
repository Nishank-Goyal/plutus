import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from 'src/services/guards/auth.guard.service';
import { MainGuardService } from 'src/services/guards/main.guard.service';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
{
  path:'auth',
  loadChildren:()=>import('./auth-module/auth-module.module').then(m=>m.AuthModuleModule),
  canActivate:[AuthGuardService]
},
{
  path:'main',
  loadChildren:()=>import('./main-module/main-module.module').then(m=>m.MainModuleModule),
  canActivate:[MainGuardService]
},
{
  path:'admin',
  loadChildren:()=>import('./admin-module/admin-module.module').then(m=>m.AdminModuleModule),
  canActivate:[MainGuardService]
},
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
