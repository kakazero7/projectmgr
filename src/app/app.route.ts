import {Routes} from '@angular/router';
import {IndexComponent} from './component/index/index.component';
import {ContractProjectlistComponent} from './component/contract/projectlist/projectlist.component';
import {ContractProjectdetailsComponent} from './component/contract/projectdetails/projectdetails.component';
import {ProjectlistComponent} from './component/projectlist/projectlist.component';
import {ProjectdetailsComponent} from './component/projectdetails/projectdetails.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: IndexComponent
  }, {
    path: 'contract-projectlist',
    component: ContractProjectlistComponent
  }, {
    path: 'contract-projectdetails',
    component: ContractProjectdetailsComponent
  }, {
    path: 'projectlist',
    component: ProjectlistComponent
  }, {
    path: 'projectdetails',
    component: ProjectdetailsComponent
  }, {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
