import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registerUser() {
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match';
      return;
    }

    this.authService
      .registerUser(this.email, this.password)
      .then(() => {

        this.error = '';
        this.goToLogin();
      })
      .catch((err) => {
        this.error = err.message;
      });
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }
}
