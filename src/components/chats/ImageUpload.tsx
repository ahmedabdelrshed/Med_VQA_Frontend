import { CiImageOn } from "react-icons/ci";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdCancel } from "react-icons/md";

interface ImageUploadProps {
  onImageSelect: (file: File | null) => void;
  preview: string | null;
  setPreview: (preview: string | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelect,
  preview,
  setPreview,
}) => {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageSelect(file);
    }
  };

  const onCancelUpload = () => {
    setPreview(null);
    onImageSelect(null);
    const inputElement = document.getElementById(
      "inputImage"
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = ""; // Reset the value of the file input
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        id="inputImage"
        style={{ display: "none" }}
        onChange={handleUpload}
      />
      {preview ? (
        <div className="relative px-1 ml-3 mt-2 bg-gray-300 rounded-md py-1 cursor-pointer w-fit">
          <img src={preview} className="w-16 rounded-md" alt="Preview" />
          <button
            className="absolute text-white top-[-2px] cursor-pointer right-[-5px] bg-gray-500 hover:bg-red-600 rounded-full p-1"
            onClick={onCancelUpload}
          >
            <MdCancel className="w-3 h-3" />
          </button>
        </div>
      ) : (
        <div
          className="flex px-4 ml-3 bg-gray-300 rounded-xl py-1 cursor-pointer w-fit text-sm items-center"
          onClick={() => document.getElementById("inputImage")?.click()}
        >
          <IoMdAddCircleOutline className="w-5.5 h-5.5 text-gray-700 mr-3 bg-gray-400 rounded-2xl p-1" />{" "}
          Image <CiImageOn className="w-4 h-4 ml-1 mt-[3px]" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
