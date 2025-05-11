import { useState } from "react";
import BloodSugarChar from "../components/HealthyProfile/BloodSugarChar";
import LogoutModel from "../components/Modals/LogoutModel";
import { useGetBloodSugarResultsQuery } from "../store/BloodSugar/bloodSugarApi";
import { PredictionDiabetes } from "../Types";

const DiabetesHistory = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const shouldFetch = (!startDate && !endDate) || (startDate && endDate);
  const { isLoading, data, isFetching } = useGetBloodSugarResultsQuery(
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
    <div className="h-screen bg-blue-50  px-4 flex items-center">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-7 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-500 italic  mb-5">
            Diabetes History
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Monitor your blood sugar levels over time. Use the filters below to
            narrow results by date range.
          </p>
        </div>

        {/* Filters & Button */}
        <div className="flex flex-col md:flex-row md:items-end gap-6">
          <div className="flex flex-col w-full md:w-1/3">
            <label
              htmlFor="startDate"
              className="text-sm font-semibold text-blue-800"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
              max={endDate || undefined}
              className="mt-1 px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col w-full md:w-1/3">
            <label
              htmlFor="endDate"
              className="text-sm font-semibold text-blue-800"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={handleEndDateChange}
              min={startDate || undefined}
              className="mt-1 px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full md:w-1/3 flex justify-start md:justify-end gap-4">
            <button
              onClick={() => alert("Assign new status clicked!")}
              className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold px-6 py-2 rounded-lg shadow-md mt-1 md:mt-6"
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
              <BloodSugarChar
                mockDataPrediction={data.data as PredictionDiabetes[]}
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
      <LogoutModel />
    </div>
  );
};

export default DiabetesHistory;
