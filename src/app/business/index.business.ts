import ParentBusiness from 'fccore2/classes/parent.business';

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
  };

  static navigatorList(pthis: any, context: any, eid: any): void {
    switch (eid) {
      case 1:
        console.log(eid);
        console.log(context);
        ParentBusiness.router.navigate(['/contract-projectlist'], {
          queryParams: {
            ID: 1
          }
        });
        break;
        case 2:
        console.log(eid);
        console.log(context);
        ParentBusiness.router.navigate(['/execute-projectlist'], {
          queryParams: {
            ID: 2
          }
        });
        break;
    }
  }
}
