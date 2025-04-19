import useUpdateQuestion from "../../../hooks/useUpdateQuestion";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";

const UpdateQuestionModal = () => {
  const {
    closeModal,
    isLoading,
    onChangeQuestion,
    onUpdateQuestion,
    question,
    updatedQuestion,
  } = useUpdateQuestion();
  return (
    <dialog
      id="UpdateQuestionModal"
      className="modal fixed inset-0 flex justify-center items-start"
    >
      <div className="modal-box bg-white text-black mt-28 flex flex-col  p-6 rounded-lg">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="">
          <h3 className={`text-lg font-bold mb-2 text-indigo-500 `}>
            Update Question
          </h3>
          <div className="mb-4">
            <label
              htmlFor="question"
              className="block text-md  font-medium text-gray-700"
            >
              Question Text
            </label>
            <Input
              placeholder="Enter chat title"
              value={question}
              onChange={onChangeQuestion}
            />
          </div>
          <div className="flex space-x-3 mt-2">
            <Button
              className=" bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300"
              isLoading={isLoading}
              onClick={onUpdateQuestion}
              disabled={
                question === updatedQuestion.question || question === ""
              }
            >
              Update
            </Button>
            <Button
              className=" bg-gray-500 hover:bg-gray-600"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default UpdateQuestionModal;
