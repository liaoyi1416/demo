"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preorder = void 0;
const query_1 = __importDefault(require("../../models/query"));
/*下单每次减一*/
const preorder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.query.id;
    let sql1 = `select * from goods
                WHERE id=${id} and currentInventory > 0`;
    let sql2 = `UPDATE goods
                SET currentInventory = currentInventory - 1
                WHERE id=${id}`;
    try {
        let result1 = yield (0, query_1.default)(sql1);
        //判断商品存在且数量不为0时
        if (result1 && result1.length > 0) {
            let result2 = yield (0, query_1.default)(sql2);
            res.json({
                code: 1,
                msg: '成功',
            });
            return;
        }
        res.json({
            code: 2,
            msg: '商品为空',
        });
    }
    catch (e) {
        res.json({
            code: 0,
            msg: e,
        });
    }
});
exports.preorder = preorder;
