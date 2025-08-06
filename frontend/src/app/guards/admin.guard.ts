import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    // Check if user is authenticated
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/login'], {
        queryParams: { returnUrl: this.router.url }
      });
      return false;
    }

    // Check if user is admin
    if (!this.authService.isAdmin) {
      // Redirect to home page with error message
      this.router.navigate(['/home']);
      return false;
    }

    // User is authenticated and is admin
    return true;
  }
} 