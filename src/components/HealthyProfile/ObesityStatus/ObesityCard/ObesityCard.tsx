import { motion } from "framer-motion";
import { useGetObesityLevelQuery } from "../../../../store/Obesity/obesityApi";
import SkeletonObesityCard from "./SkeletonObesityCard";
import {
  formatDateObesity,
  readableStatus,
} from "../../../../utils/obesityValues";
import { openModel } from "../../../../utils/modelsFuns";
import ObesityNewStatus from "../obesityNewStatus/ObesityNewStatus";

const ObesityCard = () => {
  const { data, isLoading, isFetching } = useGetObesityLevelQuery();
  const result = data?.data;

  if (isLoading || isFetching) return <SkeletonObesityCard />;

  const isEmpty = !result || Object.keys(result).length === 0;
  const displayStatus =
    readableStatus[result?.predictionResult as string] || "";

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full sm:w-[48%] lg:w-[55%] xl:w-[32%] bg-white rounded-2xl shadow-md p-4 mb-2"
    >
      <div>
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/images/obesity.png"
              alt="Obesity Icon"
              className="w-10 h-10"
            />
            <h2 className="text-sm font-semibold text-gray-700">
              Obesity Status
            </h2>
          </div>

          {!isEmpty && (
            <>
              <div className="text-sm text-blue-500 bg-gray-100 rounded-full px-3 py-1 font-bold">
                {displayStatus}
              </div>
            </>
          )}
        </div>
        {!isEmpty && (
          <p className="text-gray-500 text-[13px] mb-1">
            Last Assign Date: 
            <span className="font-medium">
               {" "} {formatDateObesity(result?.date)}
            </span>
          </p>
        )}

        {/* Empty Message */}
        {isEmpty && (
          <p className="text-[13px] text-gray-400 italic mb-2">
            Let’s start to get your obesity level!
          </p>
        )}

        {/* Footer */}
        <div className="flex justify-between items-center">
          {result?.reportPdfUrl ? (
            <a
              target="_blank"
              href={result.reportPdfUrl}
              download
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              📄 Download Report
            </a>
          ) : (
            <span className="text-sm text-gray-400">📄 No Report</span>
          )}

          <button
            onClick={() => {
              openModel("NewObesityModal");
            }}
            className="text-sm bg-blue-400 hover:bg-blue-500 cursor-pointer text-white px-3 py-1 rounded-md transition"
          >
            Assign New Status
          </button>
        </div>
      </div>
      <ObesityNewStatus />
    </motion.div>
  );
};

export default ObesityCard;
