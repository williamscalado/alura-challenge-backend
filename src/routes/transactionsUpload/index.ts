import { Router } from "express";
import { transactionsUploadController } from "../../http/controllers/transactionsUpload";
import { uploadMulter } from "../../http/middleware/uploadCsv";

export const transactionsUpload = Router();

transactionsUpload.post('/transactions-upload', uploadMulter.single('fileupload'), transactionsUploadController)