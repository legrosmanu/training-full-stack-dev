import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  @Input() name: string;
  @Input() status: string;

  constructor() {
    this.name = "default name";
    this.status = "defaut status";
  }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.status;
  }

  getColor(): string {
    let color = 'red';
    if(this.status === 'On') {
      color = 'green';
    }
    return color;
}

}
