import query from "./models/query";

const schedule = require('node-schedule');
console.log('start schedule')
const  scheduleCronstyle = ()=>{
    //每天23:59:59定时执行一次: 库存变默认值
    schedule.scheduleJob('59 59 23 * * *',()=>{
        console.log('scheduleCronstyle:' + new Date());
        let sql1 = `UPDATE goods SET currentInventory = defaultInventory`;

        try {
            let result1 = query(sql1);
            console.log('success');

        } catch (e) {
            console.log(e);
        }
    });
}

scheduleCronstyle();