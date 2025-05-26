import { motion } from "framer-motion";

const ObesityCard = () => {
  return (
 <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full sm:w-[48%] lg:w-[32%] bg-white rounded-2xl shadow-md p-4 mb-3"
      >
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 ">
              <img
                src="/images/obesity.png" // Update if stored elsewhere
                alt="Obesity Icon"
                className="w-10 h-10"
              />
              <h2 className="text-lg font-semibold text-gray-700">
                Obesity Status
              </h2>
            </div>
            <div className="text-sm text-blue-400 bg-gray-100 rounded-full px-3 py-1 font-bold">
              Overweight
            </div>
          </div>
          <p className="text-gray-500 text-[13px] mb-1">
            Last Assign Date: <span className="font-medium"> 25 may 2023 </span>
          </p>

          <div className="flex justify-between items-center">
            <a
              // href={`/reports/${obesityLevel.toLowerCase()}.pdf`}
              download
              className="text-sm text-blue-500  hover:text-blue-700"
            >
              📄 Download Report
            </a>
            <button
              // onClick={handleAssignNewStatus}
              className="text-sm bg-blue-400  hover:bg-blue-500 cursor-pointer text-white px-3 py-1 rounded-md transition"
            >
              Assign New Status
            </button>
          </div>
        </div>
      </motion.div>
  )
}

export default ObesityCard