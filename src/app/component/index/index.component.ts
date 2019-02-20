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
    this.getUserInfo('message');
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
  getUserInfo(message) {
    this.data.userData = JSON.parse(message);
    // this.data.userData = JSON.parse('{"realName":"zhaguangjun","sysId":"bc19ed857f244fcda04f7b6d92c12bb4","departName":"文书处","departId":"b272a564f3a24ff58a9c5c97c55c81e2","rootDepartId": "dda2c17b1a0d4f238a4a40e17f5bc1f5","rootDepartName": "办公厅","intranetEmail":"XXXX@RAILS.CN","mobilePhone":"1300000006","officePhone":"","sex": 1,"officeLocation": "主楼101","sysUserphoto":""}');
    IndexBusiness.processUser(this.data.userData.realName);
  }

  event(eventName, context, eid): void {
    switch (eventName) {
      case this.data.events.navigatorList:
        IndexBusiness.navigatorList(this, context, eid);
        break;
      case this.data.events.closepage:
        // railsMobilePlatform.closepage();
        break;
    }
  }
}
