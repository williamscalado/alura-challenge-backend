import { Router } from "express";
import { transactionController } from "../../http/controllers/transactions";
import { isAuthenticatedVeryfi } from "../../http/middleware/tokenVerify";

export const transactionRouter = Router()


transactionRouter.get('/transactions', isAuthenticatedVeryfi, transactionController.getAllTransactions)