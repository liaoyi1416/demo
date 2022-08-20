import {DataStore} from "../../data/data";
import {RequestHandler} from "express";
import query from "../../models/query";
/*下单每次减一*/
export const preorder:RequestHandler=async (req, res, next) => {

    let id = req.query.id;
    let sql1 = `select * from goods
                WHERE id=${id} and currentInventory > 0`;
    let sql2 = `UPDATE goods
                SET currentInventory = currentInventory - 1
                WHERE id=${id}`;
    try {
        let result1 = await query(sql1);
        //判断商品存在且数量不为0时
        if (result1 && result1.length > 0){
            let result2 = await query(sql2);
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
    } catch (e) {
        res.json({
            code: 0,
            msg: e,
        });
    }


};