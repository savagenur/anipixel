import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import AnimePage from "./pages/AnimePage";
import Footer from "./components/Footer";
import SocialPage from "./pages/SocialPage";
import AnimeDetailPage from "./pages/AnimeDetailPage";

const App = () => {
  return (
    <div>
      <Navbar
        imageUrl={
          "https://cdn.magicdecor.in/com/2023/10/20180551/Elemental-Magic-Anime-Wallpaper-for-Wall-M.jpg"
        }
      />
      <div className="">
        <Routes>
          <Route path="/" element={<AnimePage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/anime/:id" element={<AnimeDetailPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
