import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth: boolean;
  devices: { name: string, status: string }[];

  constructor() {
    this.isAuth = false;
    this.devices = [];
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
    this.addDevice("Washing machine", "On");
    this.addDevice("Computer", "Off");
    this.addDevice("Coffee machine", "On");
  }

  onTurnOn(): void {
    console.log("Everyting is turned on!");

  }

  addDevice(name: string, status: string): void {
    this.devices.push({
      name: name,
      status: status
    });
  }

}
