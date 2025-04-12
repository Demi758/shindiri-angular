import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service'; // Import your auth service

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // Check if the user is logged in (i.e., token exists in localStorage)
    if (this.authService.isLoggedIn()) {
      return of(true); // If logged in, allow access
    } else {
      this.router.navigate(['/login']); // Otherwise, redirect to login
      return of(false); // Prevent navigation
    }
  }
}
