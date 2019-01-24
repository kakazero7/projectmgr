import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProvidersService } from 'fccore2';
import ParentBusiness from 'fccore2/classes/parent.business';
@Component({
  selector: 'app-root',
  template: `<router-outlet ></router-outlet>`
})
export class AppComponent {
  constructor(public providers: ProvidersService,
    public activatedRoute: ActivatedRoute, public router: Router) {
    // 初始化此工程方法
    this.init();
  }
  /**
   * 初始化服务类库
   * @param providers 服务类库
   */
  init(): any {
    // 初始化angular相关的工具服务类
    ParentBusiness.pInit(this.providers, this.activatedRoute, this.router);
  }
}
