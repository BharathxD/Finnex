import { Response, Express } from "express";
import { StatusCodes } from "http-status-codes";

const route = (app: Express) => {
  app.get("/healthcheck", (_, res: Response) => {
    res.status(StatusCodes.OK).send({ message: "ok" });
  });
};

export default route;
