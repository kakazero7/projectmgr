import {Component, OnInit} from '@angular/core';
import ProjectBusiness from '../../../business/change.project.business';

@Component({
  selector: 'app-changeprojectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ChangeProjectlistComponent implements OnInit {
  ngOnInit(): void {
    ProjectBusiness.findWithQuery(this, {});
  }

  data: any = {};

  constructor() {
    // 初始化数据对象
    this.data = ProjectBusiness.data;
  }

  /**
   *
   * @param eventName 事件名称
   * @param context 事件上下文，$event对象
   */
  onLeftClick() {
  }
  onChange(item) {
  }

  onTabClick(item) {
  }
  event(eventName, context, status): void {
    switch (eventName) {
      // 点击显示年度的过滤条件
      case this.data.events.clickTopYearFilter:
        ProjectBusiness.clickTopYearFilter(this, context);
        break;
      // 点击显示计划类型的过滤条件
      case this.data.events.clickTopModelPlanFilter:
        ProjectBusiness.clickTopModelPlanFilter(this, context);
        break;
      // 点击显示课题类型的过滤条件
      case this.data.events.clickTopModelClassFilter:
        ProjectBusiness.clickTopModelClassFilter(this, context);
        break;
      // 选择年的事件处理
      case this.data.events.onSelectYearChange:
        ProjectBusiness.onSelectYearChange(this, context);
        break;
      // 选择计划类型的事件处理
      case this.data.events.onSelectModelPlanChange:
        ProjectBusiness.onSelectModelPlanChange(this, context);
        break;
      // 选择课题类型的事件处理
      case this.data.events.onSelectModelClassChange:
        ProjectBusiness.onSelectModelClassChange(this, context);
        break;
      // 点击年的ok事件
      case this.data.events.clickYearOk:
        ProjectBusiness.clickYearOk(this, context);
        break;
      // 点击计划分类的事件处理
      case this.data.events.clickModelPlanOk:
        ProjectBusiness.clickModelPlanOk(this, context);
        break;
      // 点击课题分类的事件处理
      case this.data.events.clickModelClassOk:
        ProjectBusiness.clickModelClassOk(this, context);
        break;
      // 点击年度的取消事件
      case this.data.events.clickYearCancel:
        ProjectBusiness.clickYearCancel(this);
        break;
      // 点击计划类型的取消事件
      case this.data.events.clickModelPlanCancel:
        ProjectBusiness.clickModelPlanCancel(this);
        break;
      // 点击课题类型的取消事件
      case this.data.events.clickModelClassCancel:
        ProjectBusiness.clickModelClassCancel(this);
        break;
      // 点击蒙版取消显示
      case this.data.events.onMaskClickYear:
        ProjectBusiness.onMaskClickYear(this, context);
        break;
      // 点击计划蒙版取消显示
      case this.data.events.onMaskClickModelPlan:
        ProjectBusiness.onMaskClickModelPlan(this, context);
        break;
      // 点击课题蒙版取消显示
      case this.data.events.onMaskClickModelClass:
        ProjectBusiness.onMaskClickModelClass(this, context);
        break;
      // 查询条件被修改的时候调用
      case this.data.events.onQueryValueChange:
        ProjectBusiness.onQueryValueChange(this, context);
        break;
      // 查询条件被清空的时候调用
      case this.data.events.onQueryValueClear:
        ProjectBusiness.onQueryValueClear(this, context);
        break;
      // 跳转至详情页
      case this.data.events.navigatorDetail:
        ProjectBusiness.navigatorDetail(this, context, status);
        break;
      // 点击返回调用
      case this.data.events.onLeftClick:
        console.log('-1')
        history.go(-1)
        break;
    }
  }
}
