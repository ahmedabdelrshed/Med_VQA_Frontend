import { useEffect, useRef, useState } from "react";
import { GoUpload } from "react-icons/go";
import Button from "../../../ui/Button";
import useTreatPrescription from "../../../hooks/useTreatPrescription";
import toast from "react-hot-toast";
import ShowTreatPrescriptionModel from "./ShowTreatPrescriptionModel";
import { openModel } from "../../../utils/modelsFuns";
import { TreatPrescriptionData } from "../../../Types";

const TreatPrescription = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { loading, response, sendFile, error } = useTreatPrescription();
  console.log(response);
  const handleChooseFile = () => {
    fileInputRef.current?.click();
  };
  const dataRes: TreatPrescriptionData = {
    data: {
      instructions: response?.instructions || [],
      medications: response?.medications || [],
      tests: response?.tests || [],
    },
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // reset file input
    }
  };

  const handleSubmit = async () => {
    if (selectedImage) {
      const file = fileInputRef.current?.files?.[0];
      if (file) {
        await sendFile(file);
        openModel("ShowTreatPrescriptionModel");
      }
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[400px] h-auto bg-white shadow-2xl rounded-3xl p-6 flex flex-col justify-center items-center space-y-5 transition duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
        {!selectedImage ? (
          <>
            <div className="bg-blue-100 text-blue-600 p-5 rounded-full">
              <GoUpload className="text-4xl" />
            </div>
            <p className="text-gray-700 text-lg font-semibold text-center">
              Upload Prescription Image
            </p>
            <button
              onClick={handleChooseFile}
              className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium"
            >
              Choose File
            </button>
          </>
        ) : (
          <>
            <img
              src={selectedImage}
              alt="Prescription"
              className="w-full h-56 object-contain rounded-lg border"
            />
            <div className="flex gap-3">
              <Button
                onClick={handleSubmit}
                isLoading={loading}
                className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
              >
                Submit
              </Button>
              <button
                onClick={handleCancel}
                className="bg-gray-300 cursor-pointer hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md text-sm"
              >
                Cancel
              </button>
            </div>
          </>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <ShowTreatPrescriptionModel data={dataRes.data} />
    </div>
  );
};

export default TreatPrescription;
