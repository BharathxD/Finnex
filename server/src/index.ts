import express from "express";
import logger from "./utils/logger";
import cors from "cors";
import helmet from "helmet";
import route from "./routes";
import dotenv from "dotenv";
import morgan from "morgan";
import { connect, disconnect } from "./utils/connect";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(morgan("common"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"],
  })
);
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

const server = app.listen(PORT, async () => {
  logger.info(`Server is up and running at http://localhost:${PORT}`);
  await connect();
  route(app);
});

const signals = ["SIGTERM", "SIGINT"];

const gracefulShutdown = async (signal: string) => {
  process.once(signal, async () => {
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
