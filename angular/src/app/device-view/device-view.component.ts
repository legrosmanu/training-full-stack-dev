import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit, OnDestroy {

  isAuth: boolean;
  lastUpdate: Promise<Date>;
  devices: { id: number, name: string, status: string }[];
  deviceSubscription?: Subscription;

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
    this.deviceService.getDevices();
    this.deviceSubscription = this.deviceService.devicesSubject.subscribe((devices: any[]) => {
      this.devices = devices;
    });
    this.deviceService.emitDeviceSubject();
  }

  onTurnOn(): void {
    this.deviceService.switchOnAll();
    this.deviceService.emitDeviceSubject();
  }

  onTurnOff(): void {
    if (confirm('Are you sure?')) {
      this.deviceService.switchOffAll();
    }
    this.deviceService.emitDeviceSubject();
  }

  ngOnDestroy(): void {
    this.deviceSubscription?.unsubscribe();
  }

  onSave() {
    this.deviceService.saveDevices();
  }

}
