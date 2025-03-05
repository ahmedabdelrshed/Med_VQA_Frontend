import Button from "../../ui/Button";

const ProfileImage = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg  m-auto mt-10 px-8 py-6 max-w-sm  md:max-w-md  lg:min-w-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="object-cover w-22 h-22 p-1 rounded-full ring-2 ring-blue-600 "
            src="https://res.cloudinary.com/du04klrm0/image/upload/v1739842866/med_VQA_Data/profile-pictures/rlndzdsxm7lfi3alv60n.png"
            alt=""
          />
                  <div className="text-sm ml-4 mt-[-5px] hidden md:block">
                  <p className="font-semibold mb-2 lg:text-xl">Upload a New Photo</p>
                  <span className="">Ahmed Abdelrashed</span>
                  </div>
                  <input
          type="file"
          accept="image/*"
          id="imageUpload"
          style={{ display: "none" }}
        />
        </div>
       
        <div className="flex flex-col">
          <Button
            width="w-fit"
            className="px-6 bg-indigo-500 mb-3 hover:bg-indigo-600 "
            onClick={() => {
              document.getElementById("imageUpload")?.click();
            }}
          >
            Update
                  </Button>
                  <Button
            width="w-fit"
            className="px-7 bg-red-400 hover:bg-red-600 "
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
