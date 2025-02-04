import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="bg-white p-1 rounded-full">
      {darkMode ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-gray-900" />}
    </button>
  );
};

export default ThemeToggle;
