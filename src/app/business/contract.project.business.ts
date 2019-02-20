import ParentBusiness from 'fccore2/classes/parent.business';
import CacheService from 'fccore2/common/cache';
import Tools from '../tools/tools';
import {environment} from '../../environments/environment';

export default class ProjectBusiness extends ParentBusiness {
  // 请求后端的路由
  static url: any = {
    // 用于从科研项目管理系统根据登陆用户名、年度、审核状态、其他综合条件查询合同列表信息。
    getKyObjectListByConditions: 'getKyObjectListByConditions',
    // 用于从科研项目管理系统根据合同ID查询合同详细信息信息。
    findWithById: '/contract/contractCheck/GetKyContractByID',
    // 用于外部审核通过合同后，将审核结果返回科研项目管理系统
    updateKyContractStatus: '/contract/contractCheck/updateKyContractStatus'
  };

  static listArr: any = ['pageList', 'pageResolveList', 'pageRejectList'];
  /**
   * 事件池
   */
  static event: any = {
    // 点击显示年度的过滤条件
    clickTopYearFilter: 'clickTopYearFilter',
    // 点击显示类型的过滤条件
    clickTopModelPlanFilter: 'clickTopModelPlanFilter',
    // 点击显示类型的过滤条件
    clickTopModelClassFilter: 'clickTopModelClassFilter',
    // 选择年的事件处理
    onSelectYearChange: 'onSelectYearChange',
    // 选择类型的事件处理
    onSelectModelPlanChange: 'onSelectModelPlanChange',
    // 选择类型的事件处理
    onSelectModelClassChange: 'onSelectModelClassChange',
    // 点击年的ok事件
    clickYearOk: 'clickYearOk',
    // 点击分类的事件处理
    clickModelPlanOk: 'clickModelPlanOk',
    // 点击分类的事件处理
    clickModelClassOk: 'clickModelClassOk',
    // 点击年度的取消事件
    clickYearCancel: 'clickYearCancel',
    // 点击类型的取消事件
    clickModelPlanCancel: 'clickModelPlanCancel',
    // 点击类型的取消事件
    clickModelClassCancel: 'clickModelClassCancel',
    // 点击年度的蒙版事件
    onYearMaskClick: 'onYearMaskClick',
    // 点击类型的蒙版事件
    onModelMaskPlanClick: 'onModelMaskPlanClick',
    // 点击类型的蒙版事件
    onModelMaskClassClick: 'onModelMaskClassClick',
    // 输入查询条件延迟多少毫秒的时候处理时间
    onQueryValueChange: 'onQueryValueChange',
    // 输入查询条件被清空的时候
    onQueryValueClear: 'onQueryValueClear',
    // 跳转路由至明细
    navigatorDetail: 'navigatorDetail',
    // 返回
    onLeftClick: 'onLeftClick',
  };
  /**
   * 主对象内容
   */
  static data: any = {
    // 是否显示备选的年度
    showYear: false,
    // 是否显示备选的类型
    showModel: false,
    //查询条件
    searchObj: {
      queryValue: '',
    },
    // 待审核列表数据对象
    pageList: [],
    // 通过列表数据对象
    pageResolveList: [],
    // 驳回列表数据对象
    pageRejectList: [],
    // 事件对象
    events: ProjectBusiness.event,
    // 初始化的年度值对象
    initDataYear: [],
    // 初始化的类型值
    initDataModel: [],
    // 显示在过滤条件上年度的文字
    year: '年度',
    // 显示在过滤条件类型上的文字
    modelPlan: '计划类型',
    // 显示在过滤条件类型上的文字
    modelClass: '课题类别',
    // 初始化的数据对象年度值
    dataYear: [
      {
        disabled: false,
        value: '2019',
        label: '2019'
      }, {
        disabled: false,
        value: '2018',
        label: '2018'
      }, {
        disabled: false,
        value: '2017',
        label: '2017'
      }, {
        disabled: false,
        value: '2016',
        label: '2016'
      }, {
        disabled: false,
        value: '2015',
        label: '2015'
      }, {
        disabled: false,
        value: '2014',
        label: '2014'
      }, {
        disabled: false,
        value: '2013',
        label: '2013'
      }, {
        disabled: false,
        value: '2012',
        label: '2012'
      }, {
        disabled: false,
        value: '2011',
        label: '2011'
      }, {
        disabled: false,
        value: '2010',
        label: '2010'
      }
    ],
    // 初始化的数据对象类型值
    dataModelPlan: [
      {
        value: '1',
        label: '铁路总公司科研开发计划课题'
      }, {
        value: '2',
        label: '铁路总公司公司专项'
      }, {
        value: '3',
        label: '铁科院科研专项（研发中心）'
      }, {
        value: '4',
        label: '铁科院科研专项'
      }, {
        value: '5',
        label: '建设管理部建设规范'
      }, {
        value: '6',
        label: '医疗卫生科研'
      }, {
        value: '8',
        label: '重大实验专项'
      }],
    // 初始化的数据对象类型值
    dataModel: [{
      value: '1',
      label: '铁路总公司科研开发计划课题',
      children: [{value: '2001', label: '重大课题'}, {value: '2002', label: '重点课题'}, {value: '2003', label: '自筹经费课题'}, {
        value: '2011',
        label: '软科学课题'
      }]
    }, {
      value: '2',
      label: '铁路总公司公司专项',
      children: [{value: '2004', label: '科研专项'}]
    }, {
      value: '3',
      label: '铁科院科研专项（研发中心）',
      children: [{value: '2005', label: '科研专项'}]
    }, {
      value: '4',
      label: '铁科院科研专项',
      children: [{value: '2006', label: '科研专项'}]
    }, {
      value: '5',
      label: '建设管理部建设规范',
      children: [{value: '2007', label: '科研专项'}]
    }, {
      value: '6',
      label: '医疗卫生科研',
      children: [{value: '2008', label: '科研专项'}]
    }, {
      value: '8',
      label: '重大实验专项',
      children: [{value: '2009', label: '科研专项'}]
    }],
    // 课题类别
    dataModelClass: []
  };

  /**
   * 设置数据内容
   * @param pthis 页面对象
   */
  static setData(pthis: any): void {
    pthis.data = Object.assign({}, pthis.data);
  }

  /**
   * 点击顶部的年度之后显示，让顶部的显示出年度内容以供备选
   * 流程1、取消类型选择的显示 2、显示年度备选 3、赋值
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static clickTopYearFilter(pthis: any, context: any): void {
    // 取消计划类型显示
    this.clickModelPlanCancel(pthis);
    // 取消课题类型显示
    this.clickModelClassCancel(pthis);
    // 取反让年度备选页面显示
    pthis.data.showYear = !pthis.data.showYear;
    // 初始化数值
    pthis.data.initDataYear = pthis.data.dataYear;
  }

  /**
   * 点击顶部的全部之后显示，让顶部的显示出计划类型内容以供备选
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static clickTopModelPlanFilter(pthis: any, context: any): void {
    // 取消年度备选显示
    this.clickYearCancel(pthis);
    // 取消计划备选显示
    this.clickModelClassCancel(pthis);
    // 取反让类型备选页面显示
    pthis.data.showModelPlan = !pthis.data.showModelPlan;
    // 初始化数值
    pthis.data.initDataModelPlan = pthis.data.dataModelPlan;
    // 课题清空
    pthis.data.modelClass = '课题类别';
  }

  /**
   * 点击顶部的全部之后显示，让顶部的显示出课题类型内容以供备选
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static clickTopModelClassFilter(pthis: any, context: any): void {
    // 取消年度备选显示
    this.clickYearCancel(pthis);
    // 取消计划备选显示
    this.clickModelPlanCancel(pthis);
    // 取反让类型备选页面显示
    pthis.data.showModelClass = !pthis.data.showModelClass;
    // 初始化数值
    let classs = pthis.data.dataModel.filter(d => d.value === pthis.data.modelPlan);
    if (classs.length > 0) {
      pthis.data.initDataModelClass = classs[0].children;
    }
  }

  /**
   * 选中后处理事件，year值修改为选中的值，并取消显示
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static onSelectYearChange(pthis: any, context: any): void {
    // context为数组，数组第一个为第一分类的选中值，第二个为第二分类的选中值，以此类推
    // 年度是单分类的数据，取0索引作为选中的值
    pthis.data.year = context[0];
    // 取消显示年度备选
    this.clickYearCancel(pthis);
    // 查询
    this.findWithQuery(pthis, context);
  }

  /**
   * 选中后处理事件，modelPlan值修改为选中的值，并取消显示
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static onSelectModelPlanChange(pthis: any, context: any): void {
    // context为数组，数组第一个为第一分类的选中值，第二个为第二分类的选中值，以此类推
    // 分类是二级分类的数据，取0索引作为最终选中的值
    pthis.data.modelPlan = context[0];
    // 取消显示分类备选
    this.clickModelPlanCancel(pthis);
    // 查询
    this.findWithQuery(pthis, context);
  }

  /**
   * 选中后处理事件，modelClass值修改为选中的值，并取消显示
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static onSelectModelClassChange(pthis: any, context: any): void {
    // context为数组，数组第一个为第一分类的选中值，第二个为第二分类的选中值，以此类推
    // 分类是二级分类的数据，取0索引作为最终选中的值
    pthis.data.modelClass = context[0];
    // 取消显示分类备选
    this.clickModelClassCancel(pthis);
    // 查询
    this.findWithQuery(pthis, context);
  }

  /**
   * 点击取消的事件处理：隐藏年度备选页面，修改为false
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static clickYearCancel(pthis: any): void {
    pthis.data.showYear = false;
  }

  /**
   * 点击取消的事件处理：隐藏类型或计划备选页面，修改为false
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static clickModelPlanCancel(pthis: any): void {
    pthis.data.showModelPlan = false;
  }

  /**
   * 点击取消的事件处理：隐藏类型或课题备选页面，修改为false
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static clickModelClassCancel(pthis: any): void {
    pthis.data.showModelClass = false;
  }

  /**
   * 点击ok之后的事件处理，
   * @param pthis 页面对象this
   * @param context 事件上下文，事件参数
   */
  static clickYearOk(pthis: any, context: any): void {
    this.clickYearCancel(pthis);
  }

  /**
   * 点击ok之后的事件处理
   * @param pthis 页面对象this
   * @param context 事件上下文，事件参数
   */
  static clickModelPlanOk(pthis: any, context: any): void {
    this.clickModelPlanCancel(pthis);
  }

  /**
   * 点击ok之后的事件处理
   * @param pthis 页面对象this
   * @param context 事件上下文，事件参数
   */
  static clickModelClassOk(pthis: any, context: any): void {
    this.clickModelClassCancel(pthis);
  }

  /**
   * 点击蒙版之后的事件处理：隐藏界面
   * @param pthis 页面对象this
   * @param context 事件上下文，事件参数
   */
  static onMaskClickYear(pthis: any, context: any): void {
    this.clickYearCancel(pthis);

  }

  /**
   * 点击蒙版之后的事件处理：隐藏界面
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static onMaskClickModelPlan(pthis: any, context: any): void {
    this.clickModelPlanCancel(pthis);
  }

  /**
   * 点击蒙版之后的事件处理：隐藏界面
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static onMaskClickModelClass(pthis: any, context: any): void {
    this.clickModelClassCancel(pthis);
  }

  /**
   * 查询条件改变是执行查询事件
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static onQueryValueChange(pthis, context: any): void {
    this.findWithQuery(pthis, {
      multiParam: context
    });
  }

  /**
   * 查询条件被清空执行的事件
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static onQueryValueClear(pthis: any, context: any): void {
    this.findWithQuery(pthis, {});
  }

  /**
   * 用于从科研项目管理系统根据登陆用户名、年度、审核状态、其他综合条件查询合同列表信息
   * 根据查询条件执行查询并写入到主对象中
   * username当前登录用户，year是查当前年度，searchScope是当前角色，这三个参数必填
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  // static findWithQuery(pthis: any, context: RequestParam): void {
  // 请选择角色，根据角色SEARCHSCOPE的值作为查询条件
  static findWithQuery(pthis: any, context: any): void {
    const jsonData = {
      moduleId: '1_03', // (查询模块)分为4种：1_03-合同；1_04-执行；1_05-变更；1_06-验收
      userId: CacheService.get('oaUserId'),
      year: pthis.data.year === '年度' ? '2018' : pthis.data.year, // 年度
      searchScope: '1', // 必填，0或1，0表示查询待审核，1表示查询所有合同
      currentPage: '1', // 当前页
      pageSize: '10000', // 页大小
      status: '', // 状态
      planTypeName: pthis.data.modelPlan === '计划类型' ? '' : pthis.data.modelPlan,
      categoryName: pthis.data.modelClass === '课题类别' ? '' : pthis.data.modelClass,
      multiParam: context.multiParam ? context.multiParam : '' // 综合查询字段
    };
    // context.status = '';
    // context.multiParam = this.data.searchObj.queryValue; // 综合查询字段(搜索框输入)
    // context.searchScope = CacheService.getS('SEARCHSCOPE');
    // 登录用户名
    // context.username = CacheService.getS('USERNAME');
    // 年度
    // context.year = pthis.data.year;
    // if (!context.searchScope || !context.username || !context.year) {
    //   console.error('必填参数searchScope，username，year不能为空！');
    //   // return;
    // }

    if (!environment.production) { // 当线上发布的时候执行
      for (let i = 0; i <= 2; i++) { // 需要请求3次接口...
        jsonData.status = i + '';
        const postdata = Tools.parseParams(jsonData);
        ParentBusiness.daoService.postBase(environment.moblieSystemController + this.url.getKyObjectListByConditions, postdata).subscribe(res => {
          if (res.status === 'success' && res.data !== '') {
            pthis.data[this.listArr[i]] = JSON.parse(res.data);
            this.setData(pthis);
          } else {
            pthis.data[this.listArr[i]].length = 0;
          }
        });
      }
    }
  }

  /**
   * 用于从科研项目管理系统根据合同ID查询合同详细信息信息
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static findWithId(pthis: any, id: string): void {
    if (!id) {
      console.error('ID值为空，请传ID值');
    }
    ParentBusiness.daoService.getBase(this.url.findWithById, {ID: id}).subscribe(result => {
      if (result.success == '1') {
        pthis.data.mainObj = result.contractInfo;
        this.setData(pthis);
      }
    });
  }

  /**
   * 用于外部审核通过合同后，将审核结果返回科研项目管理系统
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static updateKyContractStatus(pthis: any, context: any): void {
    ParentBusiness.daoService.postBase(this.url.updateKyContractStatus, context).subscribe(result => {
      if (result.success == '1') {

      }
    });
  }

  /**
   * 跳转至明细页面
   * @param pthis 页面对象
   * @param context 事件上下文，事件参数
   */
  static navigatorDetail(pthis: any, context: any, status: string): void {
    ParentBusiness.router.navigate(['/contract-projectdetails'], {
      queryParams: {
        ID: context.id,
        auditerstatus: status
      }
    });
  }

  static onLeftClick(pthis: any, context: any): void {
    history.go(-1);
  }

  static parseParams(data) {
    try {
      let tempArr = [];
      for (let i in data) {
        let key = encodeURIComponent(i);
        let value = encodeURIComponent(data[i]);
        tempArr.push(key + '=' + value);
      }
      let urlParamsStr = tempArr.join('&');
      return urlParamsStr;
    } catch (err) {
      return '';
    }
  }
}

// 查询参数对象
interface RequestParam {
  moduleId: string;
  userId: string;
  year: string;
  status: string;
  multiParam?: string;
  searchScope: string;
  planTypeName: string;
  categoryName: string;
  currentPage: string;
  pageSize: string;
}


// 项目类型
interface Project {
  ID: string;
  Projectname: string;
  NO: string;
  UndertakeUnitName: string;
  CommitmentName: string;
}
