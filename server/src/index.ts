import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "./utils/logger";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send({ message: "ok" });
});

const server = app.listen(PORT, () => {
  logger.info(`Server is up and running at http://localhost:${PORT}`);
});
