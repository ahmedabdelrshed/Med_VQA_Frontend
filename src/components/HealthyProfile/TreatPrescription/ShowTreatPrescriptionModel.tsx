import { TreatPrescriptionData } from "../../../Types";
import Button from "../../../ui/Button";


const ShowTreatPrescriptionModel = ({ data }: TreatPrescriptionData) => {
    if (!data) {
  return (
    <div className="p-4 text-center text-gray-600">
      No treatment prescription found.
    </div>
  );
}
  const { medications, instructions, tests } = data;

  const closeModal = () => {
    const modal = document.getElementById("ShowTreatPrescriptionModel") as HTMLDialogElement;
    modal?.close();
  };

  const noData =
    medications.length === 0 && instructions.length === 0 && tests.length === 0;

  return (
    <dialog
      id="ShowTreatPrescriptionModel"
      className="modal fixed inset-0 flex justify-center items-start bg-black/50 z-50"
    >
      <div className="modal-box bg-white text-black mt-28 flex flex-col p-6 rounded-xl shadow-xl max-w-xl w-full">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={closeModal}
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">🧾 Prescription Summary</h2>

        {noData ? (
          <p className="text-center text-gray-600">No treatment prescription found.</p>
        ) : (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
            {medications.length > 0 && (
              <div>
                <h3 className="font-semibold text-blue-700 mb-2">💊 Medications</h3>
                <ul className="space-y-1 text-sm">
                  {medications.map((med, i) => (
                    <li key={i} className="border p-2 rounded-md bg-blue-50">
                      <p><strong>Name:</strong> {med.name}</p>
                      {med.dosage && <p><strong>Dosage:</strong> {med.dosage}</p>}
                      {med.frequency && <p><strong>Frequency:</strong> {med.frequency}</p>}
                      {med.route && <p><strong>Route:</strong> {med.route}</p>}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {instructions.length > 0 && (
              <div>
                <h3 className="font-semibold text-green-700 mb-2">📋 Instructions</h3>
                <ul className="list-disc list-inside text-sm">
                  {instructions.map((inst, i) => (
                    <li key={i}>{inst}</li>
                  ))}
                </ul>
              </div>
            )}

            {tests.length > 0 && (
              <div>
                <h3 className="font-semibold text-purple-700 mb-2">🧪 Tests</h3>
                <ul className="list-disc list-inside text-sm">
                  {tests.map((test, i) => (
                    <li key={i}>{test}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-center mt-6">
          <Button
            className="bg-gray-500 hover:bg-gray-600 text-white"
            onClick={closeModal}
          >
            Close
          </Button>
        </div>
      </div>
    </dialog>
  );
};

export default ShowTreatPrescriptionModel;
