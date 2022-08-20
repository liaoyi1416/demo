"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_1 = __importDefault(require("./models/query"));
const schedule = require('node-schedule');
console.log('start schedule');
const scheduleCronstyle = () => {
    //每天23:59:59定时执行一次: 库存变默认值
    schedule.scheduleJob('59 59 23 * * *', () => {
        console.log('scheduleCronstyle:' + new Date());
        let sql1 = `UPDATE inventory SET currentInventory = defaultInventory`;
        try {
            let result1 = (0, query_1.default)(sql1);
            console.log('success');
        }
        catch (e) {
            console.log(e);
        }
    });
};
scheduleCronstyle();
