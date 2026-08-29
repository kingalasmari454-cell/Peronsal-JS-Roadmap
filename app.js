let chalk= require('chalk');
let dayjs=require("dayjs");
const relativeTime=require('dayjs/plugin/relativeTime');//before using any plugin, you have to "require" it first then using "extend" method(to extend your use of dayjs (: )
dayjs.extend(relativeTime);
let date1= dayjs('2026-06-01')//so store a date use "dayjs()" method
//"dayjs().format()" to print or store the current date, write down any date you wanna print inside "dayjs()" method, and choose any format you want (for example "DD/MM/YYYY");
//console.log(dayjs('2000-01-05').format('DD/MM/YYYY'));
//console.log(dayjs('1999-01-01').fromNow());
//console.log(chalk.blue("hello"),chalk.red("hello"),chalk.green("hello"));
console.log(Math.floor(date1.diff()/8.64e+7));//"diff()" method will print the difference between current date and the specified date in milliseconds