import { Injectable } from "@angular/core";
import { CanComponentDeactivate } from "./auth.guard.service";
import { Router } from "@angular/router";

@Injectable()
export class MainGuardService{
    constructor(
        private router:Router
    ){}

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigateByUrl('/auth');
            return false;
        } else {
            return true;
        }
    }

    canDeactivate(component: CanComponentDeactivate) {
        return component.canDeactivate ? component.canDeactivate() : true;
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