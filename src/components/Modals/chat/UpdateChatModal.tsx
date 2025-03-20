import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { useUpdateChatMutation } from "../../../store/chats/chatApi";

const UpdateChatModal = () => {
  const { updatedChat } = useAppSelector((state) => state.chat);
  const [title, setTile] = useState(updatedChat.title);
  const [updateChat, { isLoading }] = useUpdateChatMutation();
  useEffect(() => {
    setTile(updatedChat.title);
  }, [updatedChat.title]);
  const closeModal = () => {
    const modal = document.getElementById(
      "UpdateChatModal"
    ) as HTMLDialogElement | null;
    modal?.close();
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTile(e.target.value);
  };
  const onUpdateChat = () => {
    updateChat({
      id: updatedChat.id,
      body: {
        title,
      },
    }).then(() => {
      closeModal();
    });
  };
  return (
    <dialog
      id="UpdateChatModal"
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
            Update Chat
          </h3>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-md  font-medium text-gray-700"
            >
              Chat Title
            </label>
            <Input
              placeholder="Enter chat title"
              value={title}
              onChange={onChangeTitle}
            />
          </div>
          <div className="flex space-x-3 mt-2">
            <Button
              className=" bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300"
              isLoading={isLoading}
              onClick={onUpdateChat}
              disabled={title === updatedChat.title || title === ""}
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

export default UpdateChatModal;
