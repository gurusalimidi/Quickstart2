import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { WindowRef } from 'src/app/window-ref.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent {
  router: any;
  authenticated: any;
  authState: any;
  userId: any;

  constructor(public auth: AuthService, router: Router, private Winref: WindowRef) {
    console.log('native window object', Winref.nativeWindow);
   }


  signInAnonymously() {
    this.auth.anonymousLogin()
      .then(() => this.afterSignIn());
  }

  private afterSignIn(): void {
    // Do after login stuff here, such router redirects, toast messages, etc.
    this.userId = this.auth.currentUser();
    // this.router.navigate(['/']);
  }
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.anonymous : false;
  }

  delete() {
    this.auth.deleteUser();
  }
}
