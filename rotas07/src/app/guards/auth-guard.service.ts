import { Injectable } from '@angular/core';
import { CanActivate, UrlTree,ActivatedRouteSnapshot,RouterStateSnapshot,Router } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor(private authService: AuthService,private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean  {
    if(this.authService.usuarioEstaAutenticado()) {
      return true 
    } 
    this.router.navigate(['/login'])
    return false
  }
}
