import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  cartItemCount: number = 0;

  constructor(private router: Router) {}

  toggleCart(): void {
    // TODO: Implement cart toggle functionality
    console.log('Toggle cart clicked');
  }

  onLoginClick(): void {
    console.log('Login link clicked - navigating to /login');
    this.router.navigate(['/login']);
  }
}
