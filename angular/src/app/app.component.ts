import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth: boolean;

  constructor() {
    this.isAuth = false;
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
  }

  onTurnOn(): void {
    console.log("Everyting is turned on!");
    
  }

}
