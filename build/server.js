"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//console.log("node-ts-api");
const express_1 = __importDefault(require("express"));
const preorder_1 = require("./api/orders/preorder");
const app = (0, express_1.default)();
//routes
app.get('/', (req, res, next) => {
    res.send('node-ts-api is working...');
});
app.get('/preorder', preorder_1.preorder);
app.listen(process.env.PORT || 8092, () => {
    console.log('Server started...');
});
