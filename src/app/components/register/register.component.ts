import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';
  success: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  registerUser() {
    if (this.password !== this.confirmPassword) {
      this.error = "Passwords do not match";
      return;
    }

    this.authService.registerUser(this.email, this.password)
      .then(() => {
        this.success = 'Successfully registered!';
        this.error = '';
        this.router.navigateByUrl('login');
      })
      .catch(err => {
        this.error = err.message;
        this.success = '';
      });
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }
}
