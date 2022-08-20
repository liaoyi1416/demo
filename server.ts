//console.log("node-ts-api");
import express from 'express';
import {preorder} from "./api/orders/preorder";
const app = express();
//routes
app.get('/',(req,res,next)=>{
    res.send('node-ts-api is working...')
})
app.get('/preorder',preorder)

app.listen(process.env.PORT || 8092,() =>{
    console.log('Server started...');
})