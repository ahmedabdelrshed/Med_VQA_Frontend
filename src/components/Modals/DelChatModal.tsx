import { useDeleteChatMutation } from "../../store/chats/chatApi";
import { useAppSelector } from "../../store/hooks";
import Button from "../../ui/Button";

const DelChatModal = () => {
  const [deleteChat, { isLoading }] = useDeleteChatMutation();
  const { deleteChatID } = useAppSelector((state) => state.chat);
  const closeModal = () => {
    const modal = document.getElementById(
      "DelChatModal"
    ) as HTMLDialogElement | null;
    modal?.close();
  };
  const onDeleteChat = async () => {
    await deleteChat(deleteChatID).then(() => {
      closeModal();
    });
  };

  return (
    <dialog
      id="DelChatModal"
      className="modal fixed inset-0 flex justify-center items-start"
    >
      <div className="modal-box bg-white text-black mt-28 flex flex-col items-center p-6 rounded-lg">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <div className="">
          <h3 className={`text-lg font-bold  text-red-500 `}>Delete Chat</h3>
          <p className={`py-4  text-gray-700 text-sm md:text-lg `}>
            Are you sure you want to delete this Chat?
          </p>
          <div className="flex space-x-3 mt-2">
            <Button
              className=" bg-red-400 hover:bg-red-600 disabled:bg-red-400"
              isLoading={isLoading}
              onClick={onDeleteChat}
            >
              Delete
            </Button>
            <Button
              className=" bg-gray-400 hover:bg-gray-600"
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

export default DelChatModal;
