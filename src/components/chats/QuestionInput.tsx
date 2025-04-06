import { CiImageOn } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
const QuestionInput = () => {
  // Automatically focus the input field when the page loads or is refreshed
  window.onload = () => {
    const input = document.getElementById("myInput");
    if (!input) return;
    input.focus();
    input.addEventListener("blur", () => {
      setTimeout(() => {
        input.focus();
      }, 0);
    });
  };
  return (
    <div className="absolute  border-3 border-[#6178ff] rounded-xl    bottom-25 left-1/2 transform -translate-x-1/2 bg-white px-4 py-4 shadow-lg w-[90%] max-w-xl ">
      <input
        id="myInput"
        type="text"
        className=" w-full    px-4  outline-none"
        placeholder="Ask Anything about Medical Image"
        autoFocus
      />
      <div className="flex px-4 ml-3 bg-gray-300 rounded-xl py-1 cursor-pointer w-fit text-sm items-center mt-5">
        <IoMdAddCircleOutline className="w-5.5 h-5.5 text-gray-700 mr-3 bg-gray-400 rounded-2xl p-1" />{" "}
        Image <CiImageOn className="w-4 h-4 ml-1 mt-[3px]" />
      </div>
    </div>
  );
};

export default QuestionInput;
