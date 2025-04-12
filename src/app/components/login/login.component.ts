import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  email: string = '';
  password: string = '';
  error: string = '';
  success: string = '';

  loginUser() {
    this.authService.login(this.email, this.password);
  }

  goToRegister() {
    this.router.navigateByUrl('register');
  }
  
}
