import { useState } from "react";
import BloodPressureBubbleChart from "../components/HealthyProfile/BloodPressure/BloodPressureChar";
import { useGetBloodPressureResultsQuery } from "../store/bloodPressure/bloodPressureApi";
import { Prediction } from "../Types";
import AssignNewStatusBloodPressure from "../components/HealthyProfile/BloodPressure/BloodPressureNewStatus/AssignNewStatusBloodPressure";
import { openModel } from "../utils/modelsFuns";

const BloodPressureHistory = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const shouldFetch = (!startDate && !endDate) || (startDate && endDate);
  const { isLoading, isFetching, data } = useGetBloodPressureResultsQuery(
    {
      startDate,
      endDate,
    },
    {
      skip: !shouldFetch,
    }
  );

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);
  };
  return (
    <div className="min-h-screen bg-blue-50  px-4 flex items-center mt-10 md:mt-0">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-7 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-indigo-400 italic  mb-5">
            Blood Pressure History
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Monitor your blood pressure levels over time. Use the filters below
            to narrow results by date range.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-end gap-6">
          <div className="flex flex-col w-full md:w-1/3">
            <label
              htmlFor="startDate"
              className="text-sm font-semibold text-indigo-800"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
              max={endDate || undefined}
              className="mt-1 px-4 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/3">
            <label
              htmlFor="endDate"
              className="text-sm font-semibold text-indigo-800"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={handleEndDateChange}
              min={startDate || undefined}
              className="mt-1 px-4 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="w-full md:w-1/3 flex justify-start md:justify-end gap-4">
            <button
              onClick={() => openModel("NewBloodPressureModal")}
              className="bg-indigo-500 hover:bg-blue-600 cursor-pointer text-white font-semibold px-6 py-2 rounded-lg shadow-md mt-1 md:mt-6"
            >
              Assign New Status
            </button>
          </div>
        </div>
        <div className="w-full h-[380px]">
          {isLoading || isFetching ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            data?.data && (
              <BloodPressureBubbleChart
                mockDataPrediction={data.data as Prediction[]}
              />
            )
          )}
        </div>
        <p className="text-sm text-gray-500 text-center m-0 ">
          This chart shows your blood sugar levels
          {startDate && endDate
            ? startDate === endDate
              ? ` for ${startDate}`
              : ` from ${startDate} to ${endDate}`
            : " for Last Week"}
        </p>
      </div>
      <AssignNewStatusBloodPressure />
    </div>
  );
};

export default BloodPressureHistory;
