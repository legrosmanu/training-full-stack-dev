import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-single-device',
  templateUrl: './single-device.component.html',
  styleUrls: ['./single-device.component.scss']
})
export class SingleDeviceComponent implements OnInit {

  name: string;
  status: string;

  constructor(private devicesService: DeviceService, private route: ActivatedRoute) {
    this.name = "Default name";
    this.status = "Off";
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.name = this.devicesService.getDevicelById(+id).name;
    this.status = this.devicesService.getDevicelById(+id).status;
  }

}
