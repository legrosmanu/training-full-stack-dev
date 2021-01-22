import { Component, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  isAuth: boolean;
  lastUpdate: Promise<Date>;
  devices: { id: number, name: string, status: string }[];

  constructor(private deviceService: DeviceService) {
    this.isAuth = false;
    this.devices = [];
    setTimeout(() => {
      this.isAuth = true;
    }, 4000);
    // just for the async pipe in the template: 
    this.lastUpdate = new Promise((resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 2000);
    });
  }

  ngOnInit(): void {
    this.devices = this.deviceService.devices;
  }

  onTurnOn(): void {
    this.deviceService.switchOnAll();
  }

  onTurnOff(): void {
    if (confirm('Are you sure?')) {
      this.deviceService.switchOffAll();
    }
  }

}
