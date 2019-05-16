import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent implements OnInit {
  menuItems = [
    {name: 'addRegion',
      path: 'addRegion'},
    {name: 'modifyRegion',
      path: 'modifyRegion'},
    {name: 'addTenant',
      path: 'addTenant'},
    {name: 'Home',
      path: ''}
  ];
  constructor() { }
  ngOnInit() {
  }

}
