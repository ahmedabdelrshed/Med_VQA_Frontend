import { useState } from "react";
import BloodSugarChar from "../components/HealthyProfile/BloodSugarChar";
import { PredictionDiabetes } from "../Types";
const mockData: PredictionDiabetes[] = [
  {
    createdAt: "2025-05-04T14:30:15.817Z",
    result: "Normal",
  },
  {
    createdAt: "2025-05-05T09:22:43.475Z",
    result: "Potentially Dangerous",
  },
  {
    createdAt: "2025-05-06T11:15:58.723Z",
    result: "Normal",
  },
  {
    createdAt: "2025-05-07T16:44:07.123Z",
    result: "Dangerous",
  },
  {
    createdAt: "2025-05-08T21:14:30.817Z",
    result: "Dangerous",
  },
  {
    createdAt: "2025-05-09T16:27:58.723Z",
    result: "Normal",
  },
  {
    createdAt: "2025-05-10T21:44:07.000Z",
    result: "Potentially Dangerous",
  },
  {
    createdAt: "2025-05-11T02:22:11.000Z", // Current date/time
    result: "Normal",
  }
];

const DiabetesHistory = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="h-screen bg-blue-50 py-10 px-4 flex items-center">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-blue-500 italic mt-3 mb-5">
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
              onChange={(e) => setStartDate(e.target.value)}
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
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 px-4 py-2 rounded-lg border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full md:w-1/3 flex justify-start md:justify-end">
            <button
              onClick={() => alert("Assign new status clicked!")}
              className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-semibold px-6 py-2 rounded-lg shadow-md mt-1 md:mt-6"
            >
              Assign New Status
            </button>
          </div>
        </div>

        {/* Chart Section */}
        <div className="w-full h-[380px]">
          <BloodSugarChar mockData={mockData}/>
        </div>
      </div>
    </div>
  );
};

export default DiabetesHistory;
