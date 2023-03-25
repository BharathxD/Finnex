import { Response, Express } from "express";
import { StatusCodes } from "http-status-codes";
import kpiHandler from "./controllers/kpi.controller";

const route = (app: Express) => {
  app.get("/healthcheck", (_, res: Response) => {
    res.status(StatusCodes.OK).send({ message: "ok" });
  });
  app.get("/kpi", kpiHandler);
};

export default route;
