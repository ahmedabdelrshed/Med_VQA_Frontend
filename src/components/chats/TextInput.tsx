import React, { useEffect, useRef } from "react";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  // Automatically focus the input field when the page loads or is refreshed
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    const input = inputRef.current;
    if (!input) return;

    const active = document.activeElement;
    const isUserInteracting =
      active &&
      (active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        (active as HTMLElement).isContentEditable);

    const selection = window.getSelection();
    const isSelectingText = selection && selection.toString().length > 0;

    if (!isUserInteracting && !isSelectingText) {
      input.focus();
    }
  };

  useEffect(() => {
    focusInput(); // focus on mount

    const handleBlur = () => setTimeout(focusInput, 0);
    const handleClick = () => setTimeout(focusInput, 0);

    const input = inputRef.current;
    input?.addEventListener("blur", handleBlur);
    window.addEventListener("click", handleClick);

    return () => {
      input?.removeEventListener("blur", handleBlur);
      window.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        className="w-full px-4 outline-none"
        placeholder="Ask Anything about Medical Image"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
