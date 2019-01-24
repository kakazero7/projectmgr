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
import {ProjectlistComponent} from './component/projectlist/projectlist.component';
import {ProjectdetailsComponent} from './component/projectdetails/projectdetails.component';
import {IndexComponent} from './component/index/index.component';
import {AppRoutes} from './app.route';


@NgModule({
  declarations: [
    AppComponent,
    ContractProjectlistComponent,
    ContractProjectdetailsComponent,
    ProjectlistComponent,
    ProjectdetailsComponent,
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
