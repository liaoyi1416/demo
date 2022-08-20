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
exports.apiGetPostsDetail = exports.apiGetPosts = void 0;
const data_1 = require("../../data/data");
const query_1 = __importDefault(require("../../models/query"));
const apiGetPosts = (req, res, next) => {
    res.json(data_1.DataStore.posts);
};
exports.apiGetPosts = apiGetPosts;
const apiGetPostsDetail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let sql = `select * from orders`;
    try {
        let result = yield (0, query_1.default)(sql);
        result.forEach((i) => {
            i.key = i.id;
        });
        res.json({
            flag: 0,
            data: result,
        });
    }
    catch (e) {
        res.json({
            flag: 1,
            msg: e,
        });
    }
});
exports.apiGetPostsDetail = apiGetPostsDetail;
