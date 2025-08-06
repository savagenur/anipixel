import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import Navbar from "./components/Navbar";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import SearchAnimePage from "./pages/SearchAnimePage";
import Footer from "./components/Footer";
import SchedulePage from "./pages/schedule/SchedulePage";
import AnimeDetailPage from "./pages/AnimeDetailPage";
import { useAnimeStore } from "./stores/animeStore";
import ScrollToTop from "./components/ScrollToTop";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import RecommendationPage from "./pages/recommendation/RecommendationPage";

const App = () => {
  const anime = useAnimeStore((state) => state.anime);

  return (
    <div>
      <ScrollToTop />
      <Navbar url={anime?.trailer.images.maximum_image_url}/>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/search/anime" element={<SearchAnimePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/recommendation" element={<RecommendationPage />} />
        <Route path="/anime/:id" element={<AnimeDetailPage />} />
        <Route path="/anime?search=:query"  element={<AnimeDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
