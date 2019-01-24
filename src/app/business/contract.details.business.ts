import ParentBusiness from 'fccore2/classes/parent.business';
import {Modal} from 'ng-zorro-antd-mobile';
import {environment} from '../../environments/environment';

export default class DetailsBusiness extends ParentBusiness {
  static url: any = {
    // 用于从科研项目管理系统根据合同ID查询合同详细信息信息。
    GetKyContractByID: 'contract/contractCheck/GetKyContractByID',
  };
  /**
   * 事件池
   */
  static event: any = {
    // 点击通过审批
    passedClick: 'passedClick',
  };
  static data: any = {
    events: DetailsBusiness.event,
    detailsContractData: {
    }
  };

  static passedClick(pthis: any, context: any): void {
    console.log(pthis);
    console.log(context);
    Modal.alert('提醒', '确认通过此合同？', [
      {text: '取消', onPress: () => {
          ParentBusiness.router.navigate(['/contract-projectlist'], {
            queryParams: {
              ID: 2
            }
          });
        }},
      {text: '确认', onPress: () => {
          ParentBusiness.router.navigate(['/contract-projectlist'], {
            queryParams: {
              ID: 2
            }
          });
        }}
    ]);
  }

  static getDetailsContract(pthis: any, context: any): void {
    ParentBusiness.daoService.postBase(environment.mockurl + this.url.GetKyContractByID, context).subscribe(res => {
      if (res.success == '1') {
        this.data.detailsContractData = res.data;
      }
    });
  }

  static failClick(pthis: any, context: any): void {
    console.log(pthis);
    console.log(context);
    Modal.prompt(
      '驳回意见',
      '请说明不通过原因或建议意见',
      [{text: '取消'}, {text: '确认', onPress: value => console.log(`输入的内容:${value}`)}],
      'default',
      ['']
    );
  }


}
