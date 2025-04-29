import axios from "axios";
type res = {
    label:string
}
const getPredictionFromModel = async (image: File | Blob,setLoadingPrediction:(value:boolean)=>void) => {
    try {
        const formData = new FormData();
        formData.append("file", image, "image.jpg");

        const response = await axios.post<res>(
            "https://a7med95-model-medical-v1.hf.space/predict",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        setLoadingPrediction(false)
        return response.data.label;
    } catch (error) {
        console.log(error)
    }
};

export default getPredictionFromModel;
