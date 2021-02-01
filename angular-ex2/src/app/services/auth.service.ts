import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async createNewUser(email: string, password: string): Promise<void> {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  async signInUser(email: string, password: string): Promise<void> {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signOutUser(): void {
    firebase.auth().signOut();
  }

}
