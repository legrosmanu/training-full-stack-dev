import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.scss']
})
export class NewDeviceComponent implements OnInit {

  defaultStatus: string;

  constructor(private deviceService: DeviceService, private router: Router) {
    this.defaultStatus = "Off";
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    const name = form.value['name'];
    const status = form.value['status'];
    this.deviceService.addDevice(-1, name, status);
    this.router.navigate(['devices']);
  }

}
