import { Component } from '@angular/core';
import firebase from 'firebase';
import * as configEx2 from './config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ex2';
  constructor() {
    // Initialize Firebase
    firebase.initializeApp(configEx2.firebase);
  }
}
