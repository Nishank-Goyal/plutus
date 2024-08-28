import { Router } from '@angular/router';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
    constructor(
        public router: Router,
        private toastrService:ToastrService,
        private spinner: NgxSpinnerService
    ) { }

    /** Request interceptor **/
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');
        this.spinner.show();
        if (token) {
            req = req.clone({
                headers: req.headers.set("authorization", token)
            });
        }
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            /**
             * Success do something
             */
            if (event instanceof HttpResponse) {
                    const message:string = event.body.msg;
                    if(!message.includes('Fetched')&&!message.includes('fetched')&&!message.includes('Fetch')){
                        this.toastrService.success(message,"Success");
                    }
                    this.spinner.hide();
            }
        }, async (err: any) => {
            
            console.log('Erroo',err);
            
            const status = err?.error?.statusCode;
            const message = err.error.msg;
            this.spinner.hide();
            if (status === 401) {
                localStorage.clear();
                this.toastrService.error(message)
                this.router.navigateByUrl(`/auth`)
            }else if (status === 403){
                // this.toastrService.error(message)
                // this.router.navigateByUrl(`/${NAV.AUTH}/page403`)
            } 
            else {
                this.toastrService.error(message)
            }
        }))
    }
}