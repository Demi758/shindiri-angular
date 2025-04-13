import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      const url = this.router.url;
      if (url === '/login' || url === '/register') {
        this.isLoggedIn = false;
      } else {
        this.isLoggedIn = true;
      }
    });
  }

  isLoggedIn: boolean = false;

  logout() {
    return this.authService.logout();
  }
}
