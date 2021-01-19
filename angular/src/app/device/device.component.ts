import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  name: string;
  status: string;

  constructor() {
    this.name = "default name";
    this.status = "defaut status";
  }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.status;
  }

}
