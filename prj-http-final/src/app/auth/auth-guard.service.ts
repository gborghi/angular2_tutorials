import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs/internal/Observable";
import { Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private authService: AuthService, private router : Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let cango = new Promise<boolean>(
      (resolve, reject)=>{
        setTimeout(()=>{
          resolve(this.authService.isAuthenticated());
        },2)
      }
    );
    return cango.then(
      (result: boolean)=>{
        !result ? this.router.navigate(['/signin']) : console.log("authorized!");
        return result;
      }
    );
  }
}
