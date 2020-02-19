import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(private afauth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router: Router) {

            this.afauth.authState.subscribe((auth) => {
              this.authState = auth;

            });
          }

  anonymousLogin() {
    return this.afauth.auth.signInAnonymously()
    .then((user) => {
      this.authState = user;
    })
    .then(
      () => console.log('successful login') )
    .catch(error => console.log(error));
  }

  currentUser() {
    console.log('successful UID', firebase.auth().currentUser.uid);
    return firebase.auth().currentUser.uid;
  }

  deleteUser() {
    const user = firebase.auth().currentUser;
    user.delete()
    .then(
      () => console.log('successful Deletion') )
    .catch(error => console.log(error));
  }
}
