import {Component, OnInit} from '@angular/core';
import {Modal, Toast} from 'ng-zorro-antd-mobile';
import Details from '../../business/details.business';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css'],
  providers: [Toast]
})
export class ProjectdetailsComponent implements OnInit {
  ngOnInit(): void {
    Details.getDetailsContract(this, 'context');
  }

  data: any = {};

  constructor(private _modal: Modal, private _toast: Toast) {
    // 初始化数据对象
    this.data = Details.data;
  }

  renderHeader() {
    return '基本信息';
  }

  /**
   *
   * @param eventName 事件名称
   * @param context 事件上下文，$event对象
   */

  event(eventName, context): void {
    switch (eventName) {
      // 点击通过审批
      case this.data.events.passedClick:
        Details.passedClick(this, context);
        break;
      case this.data.events.failClick:
        Details.failClick(this, context);
        break;
    }
  }
}
