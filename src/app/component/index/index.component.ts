import {Component, OnInit} from '@angular/core';
import IndexBusiness from '../../business/index.business';
import SystemBusiness from "fccore2/classes/system.business";
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  ngOnInit(): void {
    console.log(SystemBusiness);
  }

  data: any = {};

  constructor() {
    // 初始化数据对象
    this.data = IndexBusiness.data;
  }

  /**
   *
   * @param eventName 事件名称
   * @param context 事件上下文，$event对象
   */
  event(eventName, context, eid): void {
    switch (eventName) {
      case this.data.events.navigatorList:
        console.log(eid);
        console.log(context);
        IndexBusiness.navigatorList(this, context, eid);
        break;
    }
  }
}
