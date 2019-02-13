
export default class Tools {
  // 将json格式转为url参数格式
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
