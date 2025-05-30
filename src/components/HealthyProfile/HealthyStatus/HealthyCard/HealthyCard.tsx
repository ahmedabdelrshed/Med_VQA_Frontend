import { motion } from "framer-motion";
import { formatDateObesity } from "../../../../utils/obesityValues";
import { openModel } from "../../../../utils/modelsFuns";
import SkeletonObesityCard from "../../ObesityStatus/ObesityCard/SkeletonObesityCard";
import { useGetHealthyStatusQuery } from "../../../../store/healthy/healthyApi";
import AssignHealthyDataModel from "../HealthyStatusData/AssignHealthyDataModel";

const HealthyCard = () => {
  const { data, isLoading, isFetching } = useGetHealthyStatusQuery();
  const result = data?.data;

  if (isLoading || isFetching) return <SkeletonObesityCard />;

  const isEmpty = !result || Object.keys(result).length === 0;
  const displayStatus = (result?.health_tier as string) || "";

  const healthyData = {
    height_cm: String(result?.height_cm) || "",
    weight_kg: String(result?.weight_kg) || "",
    has_diabetes: result?.has_diabetes ? "Yes" : "No",
    has_hypertension: result?.has_hypertension ? "Yes" : "No",
    has_heart_disease: result?.has_heart_disease ? "Yes" : "No",
    is_smoker: result?.is_smoker ? "Yes" : "No",
    activity_level: result?.activity_level || "",
  };
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
              src="/images/healthcare.png"
              alt="Health Icon"
              className="w-10 h-10"
            />
            <h2 className=" font-semibold text-gray-700">Healthy Status</h2>
          </div>

          {!isEmpty && (
            <>
              <div className="text-sm text-[#09ade3] bg-gray-100 rounded-full px-3 py-1 font-bold">
                {displayStatus}
              </div>
            </>
          )}
        </div>

        {/* Empty Message */}
        {isEmpty && (
          <p className="text-[13px] text-gray-400 italic mb-2">
            Let’s start to get your healthy level!
          </p>
        )}

        {/* Footer */}
        <div className="flex justify-between items-center mt-3">
          {isEmpty ? (
            <button
              onClick={() => {
                openModel("NewHealthyModal");
              }}
              className="text-sm bg-[#09ade3] hover:bg-blue-500 cursor-pointer text-white px-3 py-1 ml-auto rounded-md transition"
            >
              Assign Healthy Data
            </button>
          ) : (
            <>
              <p className="text-gray-500 text-[10px] italic ">
                Last Updated Date:
                <span className="font-medium">
                  {" "}
                  {formatDateObesity(result?.createdAt)}
                </span>
              </p>
              <button
                onClick={() => {
                  openModel("NewHealthyModal");
                }}
                className="text-[10px] xl:text-sm bg-[#09ade3] hover:bg-blue-500 cursor-pointer text-white px-3 py-1 ml-auto rounded-md transition"
              >
                Update Healthy Data
              </button>
            </>
          )}
        </div>
        <AssignHealthyDataModel updateHealthData={healthyData} />
      </div>
    </motion.div>
  );
};

export default HealthyCard;
