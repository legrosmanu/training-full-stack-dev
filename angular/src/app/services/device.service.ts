import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private devices: { id: number, name: string, status: string }[];
  devicesSubject: Subject<any[]>; // any because we didn't do a type for a Device

  constructor(private httpClient: HttpClient) {
    this.devices = [];
    this.devicesSubject = new Subject<any[]>();
  }

  emitDeviceSubject(): void {
    this.devicesSubject.next(this.devices.slice()); // we emit a copy of our private array devices
  }

  addDevice(id: number, name: string, status: string): void {
    if (id == null || id < 0) {
      id = this.devices[this.devices.length - 1].id + 1;
    }
    this.devices.push({
      id: id,
      name: name,
      status: status
    });
    this.emitDeviceSubject();
  }

  getDevicelById(id: number) {
    const deviceFound = this.devices.find(
      (s) => {
        return s.id === id;
      }
    );
    if (!deviceFound) {
      return this.createDefaultDevice();
    } else {
      return deviceFound;
    }
  }

  // just for the training and avoid to manage errors
  createDefaultDevice() {
    return {
      id: -1,
      name: "device not found",
      status: "Off"
    };
  }

  switchOnAll(): void {
    for (let device of this.devices) {
      device.status = 'On';
    }
    this.emitDeviceSubject();
  }

  switchOffAll(): void {
    for (let device of this.devices) {
      device.status = 'Off';
    }
    this.emitDeviceSubject();
  }

  switchOne(id: number): void {
    const device = this.getDevicelById(id);
    if (device.id != -1) {
      if (device.status === "On") {
        device.status = "Off";
      } else {
        device.status = "On";
      }
    }
    this.emitDeviceSubject();
  }

  saveDevices(): void {
    this.httpClient
      .put('https://fakeUrl/devices.json', this.devices)
      .subscribe(
        () => {
          console.log('saveDevices is ok !');
        },
        (error) => {
          console.log('Error on saveDevices ! : ' + error);
        }
      );
  }

  getDevices(): void {
    this.httpClient.get<any[]>('https://fakeUrl/devices.json')
      .subscribe(
        (response) => {
          this.devices = response;
          this.emitDeviceSubject();
        },
        (error) => {
          console.log('Error ! : ' + error);
        }
      );
  }

}
