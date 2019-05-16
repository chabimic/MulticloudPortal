import { Routes} from '@angular/router';
import {AddTenantComponent} from './add-tenant/add-tenant.component';
import {HorizontalMenuComponent} from './horizontal-menu/horizontal-menu.component';
import {HomeComponent} from './home/home.component';

const appRoutes = [
  { path: 'home',
    component: HomeComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'addTenant',
    component: AddTenantComponent
  }
  ];
export default appRoutes;
