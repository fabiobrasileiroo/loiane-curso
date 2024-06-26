
import { Injectable} from '@angular/core'
import {
  CanActivateChild,
  UrlTree,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> |Promise<boolean> | boolean {
    console.log(childRoute)
    console.log(state)
    if (state.url.includes('editar')) {
      alert('Usuário sem acesso')
      return false
    }
    return true
  }
}
