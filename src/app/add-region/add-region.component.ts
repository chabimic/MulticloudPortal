import { Component, OnInit } from '@angular/core';
import cloudTypes from '../config';
import {BackendCommunicationService} from '../backend-communication.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {

  public cloudTypes;
  constructor(private backendCommunicationService: BackendCommunicationService) { }

  ngOnInit() {
    this.backendCommunicationService.getCloudTypes().subscribe((response) => {
      console.log(response);
      this.cloudTypes = response; });
  }

}
