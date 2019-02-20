import {Component, OnInit} from '@angular/core';
import OuterChainBusiness from '../../../business/acceptance.outerchain.business';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-acceptanceouterchaindata',
  templateUrl: './outerchaindata.component.html',
  styleUrls: ['./outerchaindata.component.css']
})
export class AcceptanceOuterchaindataComponent implements OnInit {
  ngOnInit(): void {
    this.data.titles = this.route.snapshot.queryParams['titles']; // 获取url参数
    this.data.contents = this.route.snapshot.queryParams['contents'];
  }

  data: any = {
    thumbStyle: {
      width: '0',
      height: '0'
    }
  };

  constructor(private route: ActivatedRoute) {
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
