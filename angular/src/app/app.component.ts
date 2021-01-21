import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isAuth: boolean;
  devices: { name: string, status: string }[];
  lastUpdate: Promise<Date>;

  constructor() {
    this.isAuth = false;
    this.devices = [];
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
    this.addDevice("Washing machine", "On");
    this.addDevice("Computer", "Off");
    this.addDevice("Coffee machine", "On");
    this.addDevice("TV", "Off");
    // just for the async pipe in the template: 
    this.lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 2000);
    });
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
