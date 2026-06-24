import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./pages/ProjectDetails"
import LoginForm from "./components/LoginForm";
import ThemeContext from "./components/ThemeContext";
import Contact from "./pages/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-300 selection:text-indigo-900">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails/>}/>
            <Route path="/contacts" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;