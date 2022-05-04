import timedout from "connect-timeout";
import cors from "cors";
import dotenv from "dotenv";
import Express, { NextFunction, Request, Response } from "express";
import { appRouter } from "./routes";
dotenv.config();

export const app = Express();
app.use(cors());
app.use(timedout("10s"));
app.use(Express.json());
app.use(haltOnTimedout);

app.use(appRouter);

// error handle
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
	const messageError = {
		error: "ServerError",
		message: error.message,
	};

	res.status(500).json(messageError);
});

//not found
app.use("", (req: Request, res: Response) => {
	res.status(404).json({
		message: "Page not found",
	});
});

// timeout
function haltOnTimedout(req: Request, res: Response, next: NextFunction) {
	if (!req.timedout) next();
}
