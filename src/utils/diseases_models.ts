import axios from "axios";
type res = {
    predicted_class: string
    pred_class: string
    predicted_label: string
    prediction: string
}
export const chest_model = async (formData: FormData) => {
    try {
        const response = await axios.post<res>(
            "https://a7med95-chest-model.hf.space/predict",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data.predicted_class;
    } catch (error) {
        console.log(error)
    }
};

export const brain_model = async (formData: FormData) => {
    try {
        const response = await axios.post<res>(
            "https://a7med95-brain-model.hf.space/predict",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data.pred_class;
    } catch (error) {
        console.log(error)
    }
};

export const kidney_model = async (formData: FormData) => {
    try {
        const response = await axios.post<res>(
            "https://a7med95-kidney-model.hf.space/predict",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data.predicted_class;
    } catch (error) {
        console.log(error)
    }
};

export const breast_model = async (formData: FormData) => {
    try {
        const response = await axios.post<res>(
            "https://a7med95-breast-model.hf.space/predict",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data.predicted_class;
    } catch (error) {
        console.log(error)
    }
};

export const gallbladder_model = async (formData: FormData) => {
    try {
        const response = await axios.post<res>(
            "https://a7med95-gallbladder-model.hf.space/predict",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data.pred_class;
    } catch (error) {
        console.log(error)
    }
};

const heel_model = async (formData: FormData) => { 
    try {
        const response = await axios.post<res>(
            "https://a7med95-bone-spur-model.hf.space/predict/",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data.prediction;
    } catch (error) {
        console.log(error)
    }
}
const bone_model = async (formData: FormData) => { 
    try {
        const response = await axios.post<res>(
            "https://a7med95-bone-model.hf.space/predict",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data.predicted_class;
    } catch (error) {
        console.log(error)
    }
}


export const bone_heel_model = async (formData: FormData) => {
    try {
        const response = await axios.post<res>(
            "https://a7med95-bone-heel-model.hf.space/predict",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        let prediction = ""
        if (response.data.predicted_label === "Heel") {
            prediction = await heel_model(formData) as string;
        }
        else {
            prediction = await bone_model(formData) as string;
        }
        return {
            organ: response.data.predicted_label,
            disease: prediction
        };
    } catch (error) {
        console.log(error)
    }
};
