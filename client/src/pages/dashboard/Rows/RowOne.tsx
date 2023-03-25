import DashboardBox from "@/components/Dashboard/DashboardBox";
import { useGetKpiQuery } from "@/state/api";

const RowOne = () => {
  const { data } = useGetKpiQuery;
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
    </>
  );
};

export default RowOne;
