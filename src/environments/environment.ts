// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  pid: "",
  projectName: "",
  systemurl: "/server/",
  apiurl: "/server/api/",
  logurl: "/server/api/",
  authurl: "/server/api/",
  mockurl: "https://www.easy-mock.com/mock/5b863b1653caec39da89b95b/projectmgr/",
  //报表路径无须代理，请填写全路径，
  reporturl:"http://store.pcorp.cn/server/ReportServer", 
  // websocket 无须代理，请填写全路径
  wsurl: "ws://store.pcorp.cn/server/msg", 
  license:''
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
