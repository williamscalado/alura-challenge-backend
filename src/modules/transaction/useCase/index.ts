import { ITransactionDataRead, ITrasactionsUseCase, keyCSV } from "../../../domain/transaction"
import fs from "fs";
import { parse } from 'csv-parse';
import path from "path";
import { pathUpload } from "../../../http/middleware/uploadCsv";
import { unlinkFile } from '../../../helpers/util'

// verificar se já exite o dia da transação no banco 

