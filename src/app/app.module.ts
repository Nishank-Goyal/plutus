import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FAQComponent } from './faq/faq.component';
import { HowItsWorkComponent } from './how-its-work/how-its-work.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpRequestInterceptor } from 'src/services/request.interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthGuardService } from 'src/services/guards/auth.guard.service';
import { MainGuardService } from 'src/services/guards/main.guard.service';
import { AuthService } from 'src/services/auth.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeHeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    FAQComponent,
    HowItsWorkComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    ToastrModule.forRoot({autoDismiss:true,closeButton:true,progressAnimation:'decreasing',timeOut:1000}),
  ],
  providers: [AuthGuardService,MainGuardService,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:HttpRequestInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
