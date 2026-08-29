let dayjs=require('dayjs');
let customParseFormat=require('dayjs/plugin/customParseFormat');
let relativeTime= require('dayjs/plugin/relativeTime');
let objectSupport= require('dayjs/plugin/objectSupport');
dayjs.extend(objectSupport);
dayjs.extend(relativeTime);
let todayDate=dayjs()
let aDate=dayjs("1/1/2027")
console.log(aDate.diff(todayDate,'d'));// 'diff' is a method to calculate the difference in milliseconds between two different dates