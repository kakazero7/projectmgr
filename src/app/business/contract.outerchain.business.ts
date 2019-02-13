import ParentBusiness from 'fccore2/classes/parent.business';
import {environment} from '../../environments/environment';

export default class OuterChainBusiness extends ParentBusiness {
  static url: any = {
    // 用于从科研项目管理系统根据合同ID查询合同详细信息信息。
    getouterchain: 'getouterchain',
  };
  /**
   * 事件池
   */
  static event: any = {
    // 返回
    onLeftClick: 'onLeftClick',
  };
  static data: any = {
    events: OuterChainBusiness.event,
    outchaindata: ''
  };


  static getData(pthis: any, context: any): void {
    ParentBusiness.daoService.getBase(environment.mockurl + this.url.getouterchain, context).subscribe(res => {
      if (res.success == '1') {
        this.data.outchaindata = res.data;
      }
    });
  }


}
