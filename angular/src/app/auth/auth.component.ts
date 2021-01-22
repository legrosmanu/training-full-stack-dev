import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService) {
    this.authStatus = false;
  }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(): void {
    this.authService.signIn().then(() => {
      this.authStatus = this.authService.isAuth;
    });
  }

  onSignOut(): void {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }


}
