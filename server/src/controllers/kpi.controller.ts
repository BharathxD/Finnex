import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import KPIModel from "../models/kpi.model";

const kpiHandler = async (req: Request, res: Response) => {
  try {
    const kpis = await KPIModel.find();
    console.log(kpis);
    res.sendStatus(StatusCodes.OK).send(kpis);
  } catch (error: any) {
    res.status(StatusCodes.NOT_FOUND).send({ message: error.message });
  }
};

export default kpiHandler;
