import express, { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import logger from "./utils/logger";
import dotenv from "dotenv";
import { connect, disconnect } from "./utils/connect";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.get("/healthcheck", (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send({ message: "ok" });
});

const server = app.listen(PORT, async () => {
  logger.info(`Server is up and running at http://localhost:${PORT}`);
  connect();
});

const signals = ["SIGINT", "SIGTERM"];

const gracefulShutdown = async (signal: string) => {
  server.once(signal, async () => {
    console.log(`Received ${signal}, shutting down gracefully...`);
    try {
      await Promise.all([
        new Promise<void>((resolve, reject) => {
          server.close((err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        }),
        disconnect(),
      ]);
      logger.info("Server and Database connections are closed");
      process.exit(0);
    } catch (error: any) {
      console.log(error);
      process.exit(1);
    }
  });
};

for (const signal in signals) {
  gracefulShutdown(signal);
}
