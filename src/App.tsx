import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import "./App.css";
import './index.css';
import { Route, Routes } from "react-router-dom";
import AnimePage from "./pages/AnimePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main-padding">
        <Routes>
          <Route path="/" element={<AnimePage />}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
