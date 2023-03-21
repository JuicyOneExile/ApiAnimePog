import React from "react";
import HomeScreen from "./pages/HomeScreen";
import {Route, Routes} from "react-router-dom";
import Details from "./pages/Details";
import SearchPage from "./pages/SearchPage";



const App = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/animes/:id" element={<Details/>}/>
            <Route path="/search" element={<SearchPage/>}/>
        </Routes>

    )
}

export default App;