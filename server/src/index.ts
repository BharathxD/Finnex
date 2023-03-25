import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send({ message: "ok" });
});

const server = app.listen(PORT, () => {
  console.log(`Server is up and running at http://localhost:${PORT}`);
});
