import { Injectable} from '@angular/core'
import {
  CanActivateChild,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CursosGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> |Promise<boolean> | boolean {
    console.log('guarda de rota filha')
    return true
  }
}
