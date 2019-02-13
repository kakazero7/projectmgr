import {Toast} from 'ng-zorro-antd-mobile';
import Tools from '../tools/tools';
import ParentBusiness from 'fccore2/classes/parent.business';
import CacheService from 'fccore2/common/cache';
import {environment} from '../../environments/environment';

export default class IndexBusiness extends ParentBusiness {
  /**
   * 事件池
   */
  static event: any = {
    // 点击通过审批
    navigatorList: 'navigatorList',
  };
  static data: any = {
    events: IndexBusiness.event,
    urlData: {}
  };
  static url: any = {
    // 用于从科研项目管理系统根据登陆用户名、年度、审核状态、其他综合条件查询合同列表信息。
    doKyAuthentication: 'doKyAuthentication'
  };

  static navigatorList(pthis: any, context: any, eid: any): void {
    switch (eid) {
      case 1:
        ParentBusiness.router.navigate(['/contract-projectlist'], {
          queryParams: {
            ID: 1
          }
        });
        break;
      case 2:
        ParentBusiness.router.navigate(['/execute-projectlist'], {
          queryParams: {
            ID: 2
          }
        });
        break;
      case 3:
        ParentBusiness.router.navigate(['/change-projectlist'], {
          queryParams: {
            ID: 3
          }
        });
        break;
      case 4:
        ParentBusiness.router.navigate(['/acceptance-projectlist'], {
          queryParams: {
            ID: 4
          }
        });
        break;
    }
  }

  static processUser(oaUserId: string): void {
    const jsondata = {oaUserId: oaUserId, datetime: ''};
    const postdata = Tools.parseParams(jsondata);
    if (CacheService.get('oaUserId') !== null) {
      console.log(CacheService.get('oaUserId'));
    } else {
      ParentBusiness.daoService.postBase(environment.moblieSystemController + this.url.doKyAuthentication, postdata).subscribe(result => {
        console.log(result);
        if (result.status === 'success') {
          const resdata = JSON.parse(result.data);
          CacheService.set('oaUserId', resdata.kyUserLoginName);
        }
      });
    }
  }

}
