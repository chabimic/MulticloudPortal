import { Component, OnInit } from '@angular/core';
import RouterConfig from '../routerConfig';
import appRoutes from '../routerConfig';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss']
})
export class HorizontalMenuComponent implements OnInit {
  menuItems = appRoutes;
  constructor() { }
  ngOnInit() {
  }

}
