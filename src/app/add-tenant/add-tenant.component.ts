import { Component, OnInit } from '@angular/core';
import {BackendCommunicationService} from '../backend-communication.service';

@Component({
  selector: 'app-add-tenant',
  templateUrl: './add-tenant.component.html',
  styleUrls: ['./add-tenant.component.scss']
})
export class AddTenantComponent implements OnInit {

  public services;
  constructor(private backendCommunicationService: BackendCommunicationService) { }

  ngOnInit() {
    this.backendCommunicationService.getServices().subscribe((response) => {
      console.log(response);
      this.services = response; });
  }

}
