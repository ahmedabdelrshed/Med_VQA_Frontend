// DarkModeToggle.tsx
import { useEffect, useState } from "react";
import { GrSun } from "react-icons/gr";
import { IoMoonOutline } from "react-icons/io5";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="w-12 h-12 rounded-full  cursor-pointer flex items-center justify-center
               bg-gray-100 dark:bg-gray-700
               text-gray-800 dark:text-white
               shadow-md hover:shadow-lg
               transition-all duration-300 ease-in-out
               hover:scale-105"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <IoMoonOutline className="text-lg" />
      ) : (
        <GrSun className="text-xl" />
      )}
    </button>
  );
};

export default DarkModeToggle;
