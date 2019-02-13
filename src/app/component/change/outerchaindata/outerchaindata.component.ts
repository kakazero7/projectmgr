import {Component, OnInit} from '@angular/core';
import OuterChainBusiness from '../../../business/change.outerchain.business';

@Component({
  selector: 'app-changeouterchaindata',
  templateUrl: './outerchaindata.component.html',
  styleUrls: ['./outerchaindata.component.css']
})
export class ChangeOuterchaindataComponent implements OnInit {
  ngOnInit(): void {
    OuterChainBusiness.getData(this, 'context');
  }

  data: any = {
    thumbStyle: {
      width: '0',
      height: '0'
    }
  };

  constructor() {
    // 初始化数据对象
    this.data = OuterChainBusiness.data;
  }

  /**
   *
   * @param eventName 事件名称
   * @param context 事件上下文，$event对象
   */

  event(eventName, context): void {
    switch (eventName) {
      // 点击返回调用
      case this.data.events.onLeftClick:
        console.log('-1');
        history.go(-1);
        break;
    }
  }
}
