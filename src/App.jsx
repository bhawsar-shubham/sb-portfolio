import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Skill from "./components/Skill";
import Education from "./components/Educations";
import Experience from "./components/Experience";
import Home from "./components/Home";

const App = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <CustomCursor></CustomCursor>

      <div className="dark:bg-black dark:text-white">
        <Navbar theme={handleSwitch}></Navbar>
        <Home></Home>
        <About></About>
        <Skill></Skill>
        <Experience></Experience>
        <Education></Education>
        <Services></Services>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
