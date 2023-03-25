import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  reducerPath: "main",
  tagTypes: ["Kpis"],
  //? KPI: Key Performance Indicators
  endpoints: (build) => ({
    getKpi: build.query<void, void>({
      query: () => "kpi/kpis",
      providesTags: ["Kpis"],
    }),
  }),
});

export const { useGetKpiQuery } = api;
