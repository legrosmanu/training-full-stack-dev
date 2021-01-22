import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  devices: { name: string, status: string }[];

  constructor() {
    this.devices = [];
    this.addDevice("Washing machine", "On");
    this.addDevice("Computer", "Off");
    this.addDevice("Coffee machine", "On");
    this.addDevice("TV", "Off");
  }


  addDevice(name: string, status: string): void {
    this.devices.push({
      name: name,
      status: status
    });
  }

  switchOnAll(): void {
    for (let device of this.devices) {
      device.status = 'On';
    }
  }

  switchOffAll(): void {
    for (let device of this.devices) {
      device.status = 'Off';
    }
  }

  switchOne(id: number): void {
    if (this.devices[id].status === "On") {
      this.devices[id].status = "Off";
    } else {
      this.devices[id].status = "On";
    }
  }

}
