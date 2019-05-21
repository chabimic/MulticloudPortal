import { Component, OnInit } from '@angular/core';
import cloudTypes from '../config';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {

  cloudTypes = cloudTypes;
  constructor() { }

  ngOnInit() {
  }

}
