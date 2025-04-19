import React from "react";

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  // Automatically focus the input field when the page loads or is refreshed
  window.onload = () => {
    const input = document.getElementById("textInput");
    if (!input) return;
    input.focus();
    input.addEventListener("blur", () => {
      setTimeout(() => {
        input.focus();
      }, 0);
    });
  };
  return (
    <div>
      <input
        type="text"
        id="textInput"
        className="w-full px-4 outline-none"
        placeholder="Ask Anything about Medical Image"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInput;
