import { Request, Response, Router } from "express";

export const transactionsUpload = Router();

transactionsUpload.get('/transactions-upload', (req: Request, res: Response)=>{
    res.send('ok')
})