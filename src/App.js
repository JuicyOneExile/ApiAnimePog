import React from "react";
import HomeScreen from "./pages/HomeScreen";
import {Route, Router, Routes} from "react-router-dom";
import Details from "./pages/Details";
import AnimeSearchResults from "./pages/AnimeSearchResults";


const App = () => {
    return (
        <Routes>
                <Route path="/" exact element={<HomeScreen/>} />
                <Route path="/animes/:id" element={<Details/>} />
                <Route path="/search-results" element={<AnimeSearchResults/>} />
        </Routes>
    )
}

export default App;