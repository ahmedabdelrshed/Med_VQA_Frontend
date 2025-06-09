import { useState } from "react";
import Button from "../../ui/Button";
import { closeModel } from "../../utils/modelsFuns";
import SYMPTOMS_BY_SYSTEM from "../../utils/symptomsData";
import { useParams } from "react-router";
import { useAddQuestionSymptomsMutation } from "../../store/questions/questionsApi";
import toast from "react-hot-toast";

const SelectSymptomsModel = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const { id: chatId } = useParams<{ id: string }>();
  const [addSymptomsQuestion, { isLoading }] = useAddQuestionSymptomsMutation();
  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };
  const handleSubmit = () => {
    if (selectedSymptoms.length === 0) {
      toast.error("Please select at least one symptom.");
      return;
    }
    if (chatId) {
      const body = { symptoms: selectedSymptoms };
      addSymptomsQuestion({ chatId, body })
        .unwrap()
        .then(() => {
          setSelectedSymptoms([]);
          closeModel("selectSymptomsModal");
        });
    }
  };
  return (
    <dialog
      id="selectSymptomsModal"
      className="modal fixed inset-0 flex justify-center items-center "
    >
      <div className="modal-box bg-white text-black flex flex-col p-6 rounded-lg w-full max-w-3xl max-h-[80vh] overflow-y-auto">
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => {
              setSelectedSymptoms([]);
            }}
          >
            ✕
          </button>
        </form>
        <p className="text-blue-500 italic text-[12px] md:text-lg mb-4 text-center">
          Select Symptoms to proceed with your health assessment.
        </p>
        <div className="max-h-[70vh] overflow-y-auto">
          {Object.entries(SYMPTOMS_BY_SYSTEM).map(
            ([system, { icon, symptoms }]) => (
              <div key={system} className="mb-6">
                <h3 className="text-md md:text-lg font-bold text-blue-500 mb-2">
                  <span className="text-indigo-400">{icon}</span>
                  {system}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {symptoms.map((symptom) => (
                    <span
                      key={symptom}
                      onClick={() => toggleSymptom(symptom)}
                      className={`cursor-pointer px-3 py-1 rounded-xl border border-[#6178ff] text-sm ${
                        selectedSymptoms.includes(symptom)
                          ? "bg-[#6178ff] text-white"
                          : "bg-white text-blue-400"
                      }`}
                    >
                      {symptom.replace(/_/g, " ")}
                    </span>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex space-x-5 mt-4 justify-center">
          <Button
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400"
            isLoading={isLoading}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            className="bg-gray-500 hover:bg-gray-600"
            onClick={() => {
              closeModel("selectSymptomsModal");
              setSelectedSymptoms([]);
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default SelectSymptomsModel;
