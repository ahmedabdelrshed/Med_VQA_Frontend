import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { LuSend } from "react-icons/lu";
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
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const handleUploadImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedImage(URL.createObjectURL(files[0]));
    }
  };
  const onCancelUpload = () => {
    setSelectedImage(null);
  };
  return (
    <div className="absolute  border-3 border-[#6178ff] rounded-xl  bottom-3  lg:bottom-16 left-1/2 transform -translate-x-1/2 bg-white px-4 py-4 shadow-lg w-[90%] max-w-xl ">
      <input
        id="myInput"
        type="text"
        className=" w-full    px-4  outline-none"
        placeholder="Ask Anything about Medical Image"
        autoFocus
      />
      <input
        type="file"
        accept="image/*"
        id="inputImage"
        style={{ display: "none" }}
        onChange={handleUploadImage}
      />
      <div className="flex justify-between items-center ">
        {selectedImage ? (
          <div className="relative px-1 ml-3 mt-2 bg-gray-300 rounded-md py-1 cursor-pointer w-fit ">
            <img src={selectedImage} className="w-16 rounded-md" alt="" />
            <button
              className="absolute text-white top-[-2px] cursor-pointer right-[-5px] bg-gray-500 hover:bg-red-600 rounded-full p-1"
              onClick={onCancelUpload}
            >
              <MdCancel className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div
            className="flex px-4 ml-3 bg-gray-300 rounded-xl py-1 cursor-pointer w-fit text-sm items-center mt-5"
            onClick={() => {
              document.getElementById("inputImage")?.click();
            }}
          >
            <IoMdAddCircleOutline className="w-5.5 h-5.5 text-gray-700 mr-3 bg-gray-400 rounded-2xl p-1" />{" "}
            Image <CiImageOn className="w-4 h-4 ml-1 mt-[3px]" />
          </div>
        )}
        <button className="mt-4 mr-3 text-white gradient-bg cursor-pointer p-2 rounded-full">
          <LuSend className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default QuestionInput;
