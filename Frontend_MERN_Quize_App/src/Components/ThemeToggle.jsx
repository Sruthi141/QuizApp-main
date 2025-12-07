import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    // Debugging: Check if the theme is set properly
    console.log(`Toggling theme to: ${newTheme}`);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    console.log(`Current theme on render: ${theme}`);
    console.log('Is dark mode applied?', document.documentElement.classList.contains('dark'));
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
    >
      {theme === "light" ? (
        <svg
          className="w-6 h-6 text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 0a1 1 0 0 1 .5.13A8 8 0 0 0 18 10a1 1 0 0 1 .13.5A8 8 0 1 1 10 .13.5.5 0 0 1 10 0z"
          />
        </svg>
      ) : (
        // Sun Icon for Dark Mode
        <svg
          className="w-6 h-6 text-yellow-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm-7-5a1 1 0 0 1 0-2H2a1 1 0 1 1 0 2h1zm14-1a1 1 0 0 1 0 2h1a1 1 0 0 1 0-2h-1zm-7 6a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1zm0-12a1 1 0 0 1 1 1V4a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zM4.22 4.22a1 1 0 0 1 1.42 0l.7.7a1 1 0 1 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42zm11.36 11.36a1 1 0 0 1 1.42 0l.7.7a1 1 0 0 1-1.42 1.42l-.7-.7a1 1 0 0 1 0-1.42zM3.51 14.94a1 1 0 0 1 .7-.3h.01a1 1 0 1 1-.71 1.7l-.7-.7a1 1 0 0 1 .7-1.7zm12.97 0a1 1 0 0 1 .7.3 1 1 0 0 1-1.42 1.42l-.7-.7a1 1 0 0 1 .7-1.7z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
