import axios from "axios";
import { brain_model, chest_model, breast_model, bone_heel_model, kidney_model, gallbladder_model } from "./diseases_models";
import { openModel } from "./modelsFuns";
import toast from "react-hot-toast";
type res = {
    prediction: string
    confidence: number
}
const getPredictionFromModel = async (image: File | Blob, setLoadingPrediction: (value: boolean) => void) => {
    try {
        const formData = new FormData();
        formData.append("file", image, "image.jpg");

        const response = await axios.post<res>(
            "https://a7med95-detect-organ.hf.space/predict",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        if (response.data.confidence < 0.6) {
            toast.error("The detected organ is not accurate. You can select symptoms manually instead.");
            setTimeout(() => {
                openModel("selectSymptomsModal");
            }, 1600);

            return;
        }
        let organ = response.data.prediction;
        let disease = "";
        let boneResult: {
            disease: string;
            organ: string;
        } = {
            disease: "",
            organ: "",
        };
        switch (organ) {
            case "Chest":
                disease = await chest_model(formData) as string;
                break;
            case "Brain":
                disease = await brain_model(formData) as string;
                break;
            case "Kidney":
                disease = await kidney_model(formData) as string;
                break;
            case "Breast":
                disease = await breast_model(formData) as string;
                break;
            case "Gallbladder":
                disease = await gallbladder_model(formData) as string;
                break;
            case "Bone":
                boneResult = await bone_heel_model(formData) as { disease: string; organ: string };
                disease = boneResult.disease;
                organ = boneResult.organ;
                break;
        }
        setLoadingPrediction(false)
        return `The organ detected is ${organ} and the disease predicted is ${disease}`;
    } catch (error) {
        console.log(error)
    }
};

export default getPredictionFromModel;
