import {Component, OnInit} from '@angular/core';
import {Modal, Toast} from 'ng-zorro-antd-mobile';
import Details from '../../../business/acceptance.details.business';
import {ActivatedRoute} from '@angular/router';
import CacheService from 'fccore2/common/cache';

@Component({
  selector: 'app-acceptanceprojectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.less'],
  providers: [Toast]
})
export class AcceptanceProjectdetailsComponent implements OnInit {
  ngOnInit(): void {
    this.getDetailsContract();
    this.getAuditerStatus();
  }

  data: any = {};

  constructor(private route: ActivatedRoute, private _modal: Modal, private _toast: Toast) {
    // 初始化数据对象
    this.data = Details.data;
  }

  /**
   *
   * @param eventName 事件名称
   * @param context 事件上下文，$event对象
   */
  event(eventName, context): void {
    switch (eventName) {
      // 跳转至外链文章
      case this.data.events.navigatorToContents:
        Details.navigatorToContents(this, context);
        break;
      // 点击通过审批
      case this.data.events.passedClick:
        Details.passedClick(this, context);
        break;
      // 点击未通过审批
      case this.data.events.failClick:
        Details.failClick(this, context);
        break;
      // 点击返回调用
      case this.data.events.onLeftClick:
        console.log(history);
        history.go(-1);
        break;
    }
  }

  getDetailsContract() {
    const userId = this.route.snapshot.queryParams['ID']; // 获取url参数
    const jsonData = {
      userId: CacheService.get('oaUserId'),
      moduleId: '1_06',
      id: userId,
    };
    Details.getDetailsContract(this, jsonData);
  }
  getAuditerStatus() {
    const auditerstatus = this.route.snapshot.queryParams['auditerstatus']; // 获取审批状态
    Details.getAuditerStatus(this, auditerstatus);
  }
}
