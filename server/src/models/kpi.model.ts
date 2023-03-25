import { prop, getModelForClass } from "@typegoose/typegoose";
import { Decimal128 } from "mongoose";

class Day {
  @prop({ required: true })
  date!: string;

  @prop({ required: true })
  revenue!: Decimal128;

  @prop({ required: true })
  expenses!: Decimal128;
}

class Month {
  @prop({ required: true })
  month!: string;

  @prop({ required: true })
  revenue!: Decimal128;

  @prop({ required: true })
  expenses!: Decimal128;

  @prop({ required: true })
  operationalExpenses!: Decimal128;

  @prop({ required: true })
  nonOperationalExpenses!: Decimal128;
}

class KPI {
  @prop({ required: true })
  totalProfit!: Decimal128;

  @prop({ required: true })
  totalRevenue!: Decimal128;

  @prop({ required: true })
  totalExpenses!: Decimal128;

  @prop({ required: true, type: Map })
  expensesByCategory!: Map<string, Decimal128>;

  @prop({ required: true, _id: false, type: [Month] })
  monthlyData!: Month[];

  @prop({ required: true, _id: false, type: [Day] })
  dailyData!: Day[];
}

const KPIModel = getModelForClass(KPI, {
  schemaOptions: { timestamps: true },
});
export default KPIModel;
