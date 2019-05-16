import {AddTenantComponent} from './add-tenant/add-tenant.component';
import {HomeComponent} from './home/home.component';
import {AddRegionComponent} from './add-region/add-region.component';

const appRoutes = [
  { name: '',
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { name: 'addRegion',
    path: 'addRegion',
    component: AddRegionComponent
  },
  { name: 'addTenant',
    path: 'addTenant',
    component: AddTenantComponent
  },
  { name: 'Home',
    path: 'home',
    component: HomeComponent
  }
  ];

export default appRoutes;
