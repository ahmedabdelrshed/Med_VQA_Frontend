import axios from "axios";
type res = {
    prediction:string
}
const getPredictionFromModel = async (image: File | Blob,setLoadingPrediction:(value:boolean)=>void) => {
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
        setLoadingPrediction(false)
        return response.data.prediction;
    } catch (error) {
        console.log(error)
    }
};

export default getPredictionFromModel;
