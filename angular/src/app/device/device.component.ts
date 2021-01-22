import { Component, Input, OnInit } from '@angular/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() name: string;
  @Input() status: string;
  @Input() id: number;

  constructor(private deviceService: DeviceService) {
    this.name = "default name";
    this.status = "defaut status";
    this.id = 0;
  }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.status;
  }

  getColor(): string {
    let color = 'red';
    if (this.status === 'On') {
      color = 'green';
    }
    return color;
  }

  onSwitch(): void {
    this.deviceService.switchOne(this.id);
  }

}
