import ParentBusiness from 'fccore2/classes/parent.business';
import {Modal, Toast} from 'ng-zorro-antd-mobile';
import {environment} from '../../environments/environment';
import Tools from '../tools/tools';
import CacheService from 'fccore2/common/cache';

export default class DetailsBusiness extends ParentBusiness {
  static url: any = {
    // 用于从科研项目管理系统根据合同ID查询合同详细信息信息。
    getKyObjectById: 'getKyObjectById',
    // 审核结果反馈(通过或驳回)
    saveCheckResult: 'saveCheckResult',
  };
  /**
   * 事件池
   */
  static event: any = {
    // 点击通过审批
    passedClick: 'passedClick',
    // 外链文章
    navigatorToHref: 'navigatorToHref',
    // 返回
    onLeftClick: 'onLeftClick',
  };
  static data: any = {
    events: DetailsBusiness.event,
    detailsContractData: {}
  };

  static passedClick(pthis: any, context: any): void {
    Modal.alert('提醒', '确认通过此合同？', [
      {
        text: '取消', onPress: () => {
        }
      },
      {
        text: '确认', onPress: () => {
          const postData = Tools.parseParams({
            id: this.data.detailsContractData.projectId,
            moduleId: '1_06',
            checkResult: '1',
            review: '通过',
            userId: CacheService.get('oaUserId')
          });
          ParentBusiness.daoService.postBase(environment.moblieSystemController + this.url.saveCheckResult, postData).subscribe(res => {
            if (res.status === 'success') {
              console.log(res);
              ParentBusiness.router.navigate(['/contract-projectlist']);
            }
          });
        }
      }
    ]);
  }

  static getDetailsContract(pthis: any, context: any): void {

    // const toast = Toast.loading('Loading...', 3000, () => {
    //   console.log('Load complete !!!');
    // });
    const postData = Tools.parseParams(context);
    ParentBusiness.daoService.postBase(environment.moblieSystemController + this.url.getKyObjectById, postData).subscribe(res => {
      if (res.status === 'success') {
        console.log(JSON.parse(res.data));
        this.data.detailsContractData = JSON.parse(res.data);
      }
    });
  }

  static navigatorToHref(pthis: any, context: any): void {
    ParentBusiness.router.navigate(['/contract-outerchaindata'], {
      queryParams: {
        ID: 2
      }
    });
  }

  static failClick(pthis: any, context: any): void {
    console.log(pthis);
    console.log(context);
    Modal.prompt(
      '驳回意见',
      '请说明不通过原因或建议意见',
      [{text: '取消'}, {
        text: '确认', onPress: value => {
          const postData = Tools.parseParams({
            id: this.data.detailsContractData.projectId,
            moduleId: '1_06',
            checkResult: '0',
            review: value,
            userId: CacheService.get('oaUserId')
          });
          ParentBusiness.daoService.postBase(environment.moblieSystemController + this.url.saveCheckResult, postData).subscribe(res => {
            if (res.status === 'success') {
              console.log(res);
              ParentBusiness.router.navigate(['/contract-projectlist']);
            }
          });
        }
      }],
      'default',
      ['']
    );
  }


}
