import {Routes} from '@angular/router';
import {IndexComponent} from './component/index/index.component';
import {ContractProjectlistComponent} from './component/contract/projectlist/projectlist.component';
import {ContractProjectdetailsComponent} from './component/contract/projectdetails/projectdetails.component';
import {ContractOuterchaindataComponent} from './component/contract/outerchaindata/outerchaindata.component';
import {ExecuteProjectlistComponent} from './component/execute/projectlist/projectlist.component';
import {ExecuteProjectdetailsComponent} from './component/execute/projectdetails/projectdetails.component';
import {ExecuteOuterchaindataComponent} from './component/execute/outerchaindata/outerchaindata.component';
import {ChangeProjectlistComponent} from './component/change/projectlist/projectlist.component';
import {ChangeProjectdetailsComponent} from './component/change/projectdetails/projectdetails.component';
import {ChangeOuterchaindataComponent} from './component/change/outerchaindata/outerchaindata.component';
import {AcceptanceProjectlistComponent} from './component/acceptance/projectlist/projectlist.component';
import {AcceptanceProjectdetailsComponent} from './component/acceptance/projectdetails/projectdetails.component';
import {AcceptanceOuterchaindataComponent} from './component/acceptance/outerchaindata/outerchaindata.component';

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
    path: 'contract-outerchaindata',
    component: ContractOuterchaindataComponent
  },
  {
    path: 'execute-projectlist',
    component: ExecuteProjectlistComponent
  }, {
    path: 'execute-projectdetails',
    component: ExecuteProjectdetailsComponent
  }, {
    path: 'execute-outerchaindata',
    component: ExecuteOuterchaindataComponent
  },
  {
    path: 'change-projectlist',
    component: ChangeProjectlistComponent
  }, {
    path: 'change-projectdetails',
    component: ChangeProjectdetailsComponent
  }, {
    path: 'change-outerchaindata',
    component: ChangeOuterchaindataComponent
  },
  {
    path: 'acceptance-projectlist',
    component: AcceptanceProjectlistComponent
  }, {
    path: 'acceptance-projectdetails',
    component: AcceptanceProjectdetailsComponent
  }, {
    path: 'acceptance-outerchaindata',
    component: AcceptanceOuterchaindataComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
