import { Router } from "express";
import { uploadMulter } from "../../config/upload";
import { transactionsUploadController } from "../../http/controllers/transactionsUpload";

export const transactionsUpload = Router();

transactionsUpload.post('/transactions-upload', uploadMulter.single('fileupload'), transactionsUploadController)