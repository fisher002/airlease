export default {
  /**日期格式化v0 */
  formatDate(res) {
    let date = new Date(res);
    let year = date.getFullYear(),
      mouth =
      date.getMonth() + 1 < 10 ?
      `0${date.getMonth() + 1}` :
      date.getMonth() + 1,
      day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
      hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
      minute =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return year + "-" + mouth + "-" + day + " " + hour + ":" + minute;
  },
  /**日期格式化v1 */
  formatDateV1(res) {
    let date = new Date(res);
    let year = date.getFullYear(),
      mouth =
      date.getMonth() + 1 < 10 ?
      `0${date.getMonth() + 1}` :
      date.getMonth() + 1,
      day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return year + "-" + mouth + "-" + day;
  },
  /**日期格式化v2 */
  formatDateV2(res) {
    let testDate = new Date(res);
    let oldDate = new Date(`${testDate.getFullYear()}-${testDate.getUTCMonth() + 1}-${testDate.getUTCDate()} ${testDate.getHours()}:${testDate.getUTCMinutes()}`);
    let nowDate = new Date();
    if ((nowDate.getTime() / 1000 - oldDate.getTime() / 1000) < 0) {
      return `未知时间`;
    }
    if ((nowDate.getTime() / 1000 - oldDate.getTime() / 1000) >= 0 && (nowDate.getTime() / 1000 - oldDate.getTime() / 1000) <= 5 * 60) {
      return `刚刚`;
    }
    if ((nowDate.getTime() / 1000 / 60 - oldDate.getTime() / 1000 / 60) > 5 && (nowDate.getTime() / 1000 / 60 - oldDate.getTime() / 1000 / 60) <= 60) {
      return `${Math.round(nowDate.getTime() / 1000 / 60 - oldDate.getTime() / 1000 / 60)}分钟前`;
    }
    if ((nowDate.getTime() / 1000 / 60 - oldDate.getTime() / 1000 / 60) > 60 && (nowDate.getTime() / 1000 / 60 - oldDate.getTime() / 1000 / 60) <= 60 * 24) {
      return `${Math.round(nowDate.getTime() / 1000 / 60 / 60 - oldDate.getTime() / 1000 / 60 / 60)}小时前`;
    }
    if ((nowDate.getTime() / 1000 / 60 / 60 - oldDate.getTime() / 1000 / 60 / 60) > 24 && (nowDate.getTime() / 1000 / 60 / 60 - oldDate.getTime() / 1000 / 60 / 60) <= 3 * 24) {
      return `${Math.round(nowDate.getTime() / 1000 / 60 / 60 / 24 - oldDate.getTime() / 1000 / 60 / 60 / 24)}天前`;
    }
    if ((nowDate.getTime() / 1000 / 60 / 60 - oldDate.getTime() / 1000 / 60 / 60) > 3 * 24) {
      return this.formatDate(res);
    }
  },
  /**对应星期几 */
  getRightDay(date) {
    let week = "";
    if (date.getDay() == 0) {
      week = "星期日";
    }
    if (date.getDay() == 1) {
      week = "星期一";
    }
    if (date.getDay() == 2) {
      week = "星期二";
    }
    if (date.getDay() == 3) {
      week = "星期三";
    }
    if (date.getDay() == 4) {
      week = "星期四";
    }
    if (date.getDay() == 5) {
      week = "星期五";
    }
    if (date.getDay() == 6) {
      week = "星期六";
    }
    return week;
  },
}
