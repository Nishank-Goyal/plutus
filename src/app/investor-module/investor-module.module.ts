import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestorHeaderComponent } from './investor-header/investor-header.component';
import { InvestorComponentComponent } from './investor-component/investor-component.component';
import { RouterModule, Routes } from '@angular/router';
import { LiveOffersComponent } from './live-offers/live-offers.component';
import { InvestmentsComponent } from './investments/investments.component';
import { PaymentsComponent } from './payments/payments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LiveOfferDetailComponent } from './live-offer-detail/live-offer-detail.component';
import { CreateInvestorComponent } from './create-investor/create-investor.component';
import { CommonModuleModule } from '../common-module/common-module.module';
import { ChatComponent } from '../common-module/chat/chat.component';
const routes:Routes = [
  {
    path:'',
    component:InvestorComponentComponent,
    children:[
      {
        path:'',
        redirectTo:'live-offers',
        pathMatch:'full'
      },
      {
        path:'live-offers',
        component:LiveOffersComponent
      },
      {
        path:'live-offers/:id',
        component:LiveOfferDetailComponent
      },
      {
        path:'live-offers/:id/chat/:chatId/:reciverId',
        component:ChatComponent
      },
      {
        path:'investments',
        component:InvestmentsComponent
      },
      {
        path:'payment',
        component:PaymentsComponent
      },
      {
        path:'create/:subscriptionId',
        component:CreateInvestorComponent
      }
    ]
  }
]
@NgModule({
  declarations: [
    InvestorHeaderComponent,
    InvestorComponentComponent,
    InvestmentsComponent,
    PaymentsComponent,
    LiveOffersComponent,
    LiveOfferDetailComponent,
    CreateInvestorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModuleModule
  ]
})
export class InvestorModuleModule { }
