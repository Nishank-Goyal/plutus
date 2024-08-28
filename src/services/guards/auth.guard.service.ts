import { Injectable } from "@angular/core";
import { CanActivate, CanDeactivate, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { CONSTANTS } from "src/constants";
export interface CanComponentDeactivate {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class AuthGuardService implements CanActivate, CanDeactivate<CanComponentDeactivate>{
    constructor(
        private toastrService:ToastrService,
        private router:Router
    ){}

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            return true;
        } else {
            this.router.navigateByUrl('/main');
            return false;
        }
    }

    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }

    loginToProceed() {
        this.toastrService.warning(CONSTANTS.MESSAGES.PROCEED_TO_LOGIN,'Warning')
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        } else {
            return false;
        }
    }
}