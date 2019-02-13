import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {Modal, ModalServiceComponent, NgZorroAntdMobileModule, Picker, Toast} from 'ng-zorro-antd-mobile';

import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {FccoreModule} from 'fccore2';
import {RouterModule} from '@angular/router';
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
import {IndexComponent} from './component/index/index.component';
import {AppRoutes} from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    ContractProjectlistComponent,
    ContractOuterchaindataComponent,
    ContractProjectdetailsComponent,
    ExecuteProjectlistComponent,
    ExecuteProjectdetailsComponent,
    ExecuteOuterchaindataComponent,
    ChangeProjectlistComponent,
    ChangeProjectdetailsComponent,
    ChangeOuterchaindataComponent,
    AcceptanceProjectlistComponent,
    AcceptanceProjectdetailsComponent,
    AcceptanceOuterchaindataComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd-mobile 模块 **/
    NgZorroAntdMobileModule,
    RouterModule.forRoot(AppRoutes),
    FccoreModule,
  ],
  providers: [Picker, Modal, Toast],
  bootstrap: [AppComponent],
  entryComponents: [ModalServiceComponent],
})
export class AppModule {
}
