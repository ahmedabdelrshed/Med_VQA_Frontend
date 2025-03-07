import { useState } from "react";
import Button from "../../ui/Button";
import { MdDelete } from "react-icons/md";
import { TUserUpdated } from "../../Types";
import ErrorMsg from "../../ui/ErrorMsg";

interface IProps {
  avatar: string;
  setUserUpdated: React.Dispatch<React.SetStateAction<TUserUpdated>>;
  fullName: string;
  loading: boolean;
  error: string | null;
  onUserUpdated: () => void;
}
const ProfileImage = ({
  avatar,
  setUserUpdated,
  fullName,
  error,
  loading,
  onUserUpdated,
}: IProps) => {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files && files[0]) {
      setSelectedImage(URL.createObjectURL(files[0]));
      setUserUpdated((prev) => ({ ...prev, file: files[0] }));
    }
  };
  const onSaveImage = async () => {
    await onUserUpdated();
    setSelectedImage(null);
  };
  const onCancelUpload = () => {
    setSelectedImage(null);
    setUserUpdated((prev) => ({ ...prev, file: null }));
  };
  return (
    <div className="bg-white shadow-lg rounded-lg  m-auto mt-10 px-8 py-6 max-w-sm  md:max-w-md  lg:min-w-lg">
      {error && (
        <div className="text-center  mt-[-8px] mb-5">
          <ErrorMsg msg={error} />
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative">
            <img
              className="object-cover w-22 h-22 p-1 rounded-full ring-2 ring-blue-600 "
              src={
                selectedImage ||
                avatar ||
                "https://res.cloudinary.com/du04klrm0/image/upload/v1739842866/med_VQA_Data/profile-pictures/rlndzdsxm7lfi3alv60n.png"
              }
              alt=""
            />

            {avatar && (
              <span className="bg-red-400 hover:bg-red-600 w-5 h-5 rounded-full flex items-center justify-center cursor-pointer text-white absolute  right-[-5px] bottom-[8px]">
                <MdDelete />
              </span>
            )}
          </div>
          <div className="text-sm ml-4 mt-[-5px] hidden md:block">
            <p className="font-semibold mb-2 text-[10px] lg:text-xl">
              Upload a New Photo
            </p>
            <span className="text-[8px] lg:text-[12px]">{fullName}</span>
          </div>
          <input
            type="file"
            accept="image/*"
            id="imageUpload"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>

        {!selectedImage ? (
          <Button
            width="w-fit"
            className="px-6 bg-indigo-500 mb-3 hover:bg-indigo-600 "
            onClick={() => {
              document.getElementById("imageUpload")?.click();
            }}
          >
            Update
          </Button>
        ) : (
          <div className="flex flex-col text-sm ">
            <Button
              isLoading={loading}
              width="w-fit"
              className="px-6 bg-green-500 mb-3 hover:bg-green-600 "
              onClick={onSaveImage}
            >
              Save Changes
            </Button>
            <Button
              width="w-fit"
              className="px-6 bg-gray-500  hover:bg-gray-600 "
              onClick={onCancelUpload}
            >
              Cancel Upload
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileImage;
