import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password).then(userCredential => {
      userCredential.user?.getIdToken().then(token => {
        localStorage.setItem('token', token);
        this.router.navigateByUrl('characters');
      });
    })
  }

  logout() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigateByUrl('login');
    });
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);

        if (decodedToken.exp && decodedToken.exp * 1000 > Date.now()) {
          return true;
        } else {
          this.logout();
          return false; 
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        return false; 
      }
    }
    return false; 
  }

  registerUser(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }
}
