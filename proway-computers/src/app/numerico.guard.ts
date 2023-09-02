import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NumericoGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    const id = route.paramMap.get('id');

    // Verificar se 'id' é um número
    if (!isNaN(Number(id))) {
      return true; // Permitir a navegação para a página de detalhes
    } else {
      return this.router.parseUrl('/nao-encontrada'); // Redirecionar para a página 'nao-encontrada'
    }
  }
}
