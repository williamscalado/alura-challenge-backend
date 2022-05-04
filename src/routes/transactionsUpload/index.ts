import { Router } from "express";
import { transactionsUploadController } from "../../http/controllers/transactionsUpload";
import { isAuthenticatedVeryfi } from "../../http/middleware/tokenVerify";
import { uploadMulter } from "../../http/middleware/uploadCsv";

export const transactionsUpload = Router();

transactionsUpload.post(
	"/transactions-upload",
	[isAuthenticatedVeryfi, uploadMulter.single("fileupload")],
	transactionsUploadController.addNewTransactionsByUpload
);
transactionsUpload.get(
	"/transactions-upload",
	isAuthenticatedVeryfi,
	transactionsUploadController.getRecordUpload
);
