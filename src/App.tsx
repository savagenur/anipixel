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
import { useAnimeStore } from "./stores/animeStore";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const anime = useAnimeStore((state) => state.anime);

  return (
    <div>
      <ScrollToTop />
      <Navbar url={anime?.trailer.images.maximum_image_url}/>
      <Routes>
        <Route path="/" element={<AnimePage />} />
        <Route path="/social" element={<SocialPage />} />
        <Route path="/anime/:id" element={<AnimeDetailPage />} />
        <Route path="/anime?search=:query"  element={<AnimeDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
