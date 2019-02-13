import {Component, OnInit} from '@angular/core';
import IndexBusiness from '../../business/index.business';
import {Toast} from 'ng-zorro-antd-mobile';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [Toast]
})
export class IndexComponent implements OnInit {
  ngOnInit(): void {
    // IndexBusiness.getUrlParams();
    this.processUser();
  }

  data: any = {};

  constructor(private route: ActivatedRoute, private _toast: Toast) {
    // 初始化数据对象
    this.data = IndexBusiness.data;
  }

  /**
   *
   * @param eventName 事件名称
   * @param context 事件上下文，$event对象
   */
  processUser() {
    // const id = this.route.snapshot.paramMap.get('params');
    const userId = this.route.snapshot.queryParams['oaUserId']; // 获取url参数
    IndexBusiness.processUser(userId);
  }

  event(eventName, context, eid): void {
    switch (eventName) {
      case this.data.events.navigatorList:
        IndexBusiness.navigatorList(this, context, eid);
        break;
    }
  }
}
