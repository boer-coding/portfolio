import "./App.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

function App() {
  const [theme, setTheme] = useState("dark");

  // Retrieve the saved theme from localStorage and apply it
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply the theme class to the body element
  useEffect(() => {
    document.body.className = theme === "light" ? "light-theme" : "";
    localStorage.setItem("theme", theme); // Save the theme in localStorage
  }, [theme]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button className="theme-toggle-button" onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div className="block">
        <Aside />
      </div>

      <div className="block main-content">
        <Navbar />

        <Outlet />
      </div>
    </>
  );
}

export default App;
