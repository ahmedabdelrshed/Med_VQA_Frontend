import { useRef, useState } from "react";
import { useAppSelector } from "../../../store/hooks";

const ShareChatModal = () => {
  const { shareChatLink } = useAppSelector((state) => state.chat);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = async () => {
    const input = inputRef.current;

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(shareChatLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Clipboard API failed:", err);
      }
    } else if (input) {
      // Fallback for older mobile browsers
      input.select();
      input.setSelectionRange(0, input.value.length); // Mobile friendly
      const success = document.execCommand("copy");
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        console.error("Fallback copy failed");
      }
    }
  };

  return (
    <dialog id="ShareChatModal" className="modal">
      <div className="modal-box bg-gray-300 text-black mb-20 p-6 rounded-lg">
        <form method="dialog">
          <button className="btn btn-sm border-none absolute right-2 top-2">
            ✕
          </button>
        </form>

        <h3 className="text-lg font-semibold italic mb-4">Share Chat</h3>
        <p className="text-sm text-blue-500 mb-4">
          You can share this chat with others using the link below. Just copy
          and send it to anyone you want to view the conversation.
        </p>

        <div className="w-full mb-4 mt-8">
          <div className="flex items-center justify-between">
            <input
              ref={inputRef}
              type="text"
              readOnly
              value={shareChatLink}
              className="bg-white w-[70%] rounded-full focus:outline-none text-sm px-3 py-2 mr-2 overflow-auto"
            />
            <button
              onClick={handleCopy}
              type="button"
              className="bg-white w-[30%] cursor-pointer border text-sm py-2 px-2 lg:px-6 lg:w-fit rounded-full font-medium border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
            >
              {copied ? "Copied!" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ShareChatModal;
