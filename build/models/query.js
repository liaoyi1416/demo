"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const db_1 = __importDefault(require("../config/db"));
const pool = mysql2_1.default.createPool(db_1.default);
const query = (sql) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error);
            }
            else {
                connection.query(sql, (error, results) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(results);
                    }
                    connection.release(); // 释放该链接，把该链接放回池里供其他人使用
                });
            }
        });
    });
};
exports.default = query;
