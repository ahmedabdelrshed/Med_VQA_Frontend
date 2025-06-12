import { useState } from "react";
import axios from "axios";
import { Medication } from "../Types";

const API_URL = "https://a7med95-treatment-prescription.hf.space/upload-prescription";

 type res = {
    medications: Medication[] | [];
        instructions: string[] | [];
        tests: string[] | [];
}
const useTreatPrescription = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<res | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendFile = async (file: File) => {
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
        const resData = {
            data: {
              ...res.data,
              
            }
          }
      
      setResponse(resData.data);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data || "Upload failed");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return { sendFile, response, error, loading };
};

export default useTreatPrescription;
