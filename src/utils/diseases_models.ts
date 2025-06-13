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

        const prediction = response.data.predicted_class;

        let message = "";

        switch (prediction) {
            case "TUBERCULOSIS":
                message = "the disease detected is Tuberculosis. It is a serious bacterial infection that mainly affects the lungs. Early diagnosis and treatment are essential.";
                break;
            case "PNEUMONIA":
                message = "the disease detected is Pneumonia. This is an infection that inflames the air sacs in one or both lungs. Prompt medical care is advised.";
                break;
            case "NORMAL":
                message = "Congratulations! No disease was found. The result is Normal.";
                break;
            default:
                message = "Unexpected prediction result.";
        }

        return message;

    } catch (error) {
        console.error("Prediction failed:", error);
        return "An error occurred while predicting. Please try again.";
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

        const prediction = response.data.pred_class.toLowerCase();

        let message = "";

        switch (prediction) {
            case "glioma":
                message = "the disease detected is Glioma. This is a type of tumor that occurs in the brain and spinal cord, often requiring prompt medical attention and possible surgical intervention.";
                break;
            case "meningioma":
                message = "the disease detected is Meningioma. These are typically benign tumors that arise from the membranes surrounding the brain and spinal cord. Follow-up and possible treatment may be necessary.";
                break;
            case "pituitary":
                message = "the disease detected is a Pituitary Tumor. These tumors occur in the pituitary gland and can affect hormone levels. Medical evaluation is recommended.";
                break;
            case "notumor":
                message = "Congratulations! No tumor was detected. The result is Normal.";
                break;
            default:
                message = "Unexpected prediction result.";
        }

        return message;

    } catch (error) {
        console.error("Prediction failed:", error);
        return "An error occurred while predicting. Please try again.";
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

        const prediction = response.data.predicted_class;

        let message = "";

        switch (prediction) {
            case "stone":
                message = "the disease detected is Kidney Stone. Kidney stones are hard deposits that form in the kidneys and can cause severe pain. Medical evaluation is recommended.";
                break;
            case "tumor":
                message = "the disease detected is a Kidney Tumor. This may be benign or malignant and requires further medical investigation for diagnosis and treatment.";
                break;
            case "normal":
                message = "Congratulations! No disease was found. The result is Normal.";
                break;
            default:
                message = "Unexpected prediction result.";
        }

        return message;

    } catch (error) {
        console.error("Prediction failed:", error);
        return "An error occurred while predicting. Please try again.";
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
        const prediction = response.data.predicted_class;

        let message = "";

        switch (prediction.toLowerCase()) {
            case "benign":
                message = "the disease detected is Benign. This type of tumor is non-cancerous and generally not life-threatening, but it may still require monitoring or treatment.";
                break;
            case "malignant":
                message = "the disease detected is Malignant. This indicates the presence of a cancerous tumor, which requires immediate medical attention and treatment.";
                break;
            case "normal":
                message = "Congratulations! No disease was found. The result is *Normal*.";
                break;
            default:
                message = "Unexpected prediction result.";
        }

        return message;
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

        const prediction = response.data.pred_class.toLowerCase();

        let message = "";

        switch (prediction) {
            case "carcinoma":
                message = "the disease detected is Gallbladder Carcinoma. This is a rare but aggressive form of cancer affecting the gallbladder. Immediate medical evaluation and treatment planning are essential.";
                break;
            case "adenomyomatosis":
                message = "the disease detected is Adenomyomatosis. This is a benign condition characterized by thickening of the gallbladder wall. Though non-cancerous, it may require monitoring or treatment if symptomatic.";
                break;
            case "gallstones":
                message = "the disease detected is Gallstones. These are solid deposits that form in the gallbladder and may cause pain or digestive issues. Consultation with a healthcare provider is recommended.";
                break;
            default:
                message = "Unexpected prediction result.";
        }

        return message;

    } catch (error) {
        console.error("Prediction failed:", error);
        return "An error occurred while predicting. Please try again.";
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

        const prediction = response.data.prediction.toLowerCase();

        let message = "";

        switch (prediction) {
            case "sever":
                message = "the condition detected is Sever’s Disease. This is a common cause of heel pain in growing children, due to inflammation of the growth plate. It often improves with rest and proper footwear.";
                break;
            case "heelspur":
                message = "the condition detected is a Heel Spur. This bony outgrowth on the heel bone can cause pain, especially when walking. Treatment may involve stretching, orthotics, or rest.";
                break;
            case "normal":
                message = "Congratulations! No heel condition was detected. The result is Normal.";
                break;
            default:
                message = "Unexpected prediction result.";
        }

        return message;

    } catch (error) {
        console.error("Prediction failed:", error);
        return "An error occurred while predicting. Please try again.";
    }
};

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

        const prediction = response.data.predicted_class;

        let message = "";

        switch (prediction) {
            case "bone cancer":
                message = "the disease detected is Bone Cancer. This is a serious condition involving malignant growth in the bones. Immediate medical diagnosis and treatment are strongly recommended.";
                break;
            case "Comminuted Bone Fracture":
                message = "the condition detected is a Comminuted Fracture, where the bone is broken into several pieces. This typically requires surgical intervention and extended healing time.";
                break;
            case "Simple Bone Fracture":
                message = "the condition detected is a Simple Fracture. It is a clean break of the bone that usually heals well with proper care and immobilization.";
                break;
            case "healthy bone":
                message = "Congratulations! No disease or fracture was found. The result is Normal Bone.";
                break;
            default:
                message = "Unexpected prediction result.";
        }

        return message;

    } catch (error) {
        console.error("Prediction failed:", error);
        return "An error occurred while predicting. Please try again.";
    }
};


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
