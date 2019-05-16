import {AddTenantComponent} from './add-tenant/add-tenant.component';
import {HomeComponent} from './home/home.component';
import {AddRegionComponent} from './add-region/add-region.component';

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
  },
  { path: 'addRegion',
    component: AddRegionComponent
  }
  ];

export default appRoutes;
