"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStore = void 0;
const post_json_1 = __importDefault(require("./post.json"));
class DataStore {
}
exports.DataStore = DataStore;
DataStore.posts = post_json_1.default;
