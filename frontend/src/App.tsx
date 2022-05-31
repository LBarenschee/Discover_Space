import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PictureOfTheDayPage from "./pages/PictureOfTheDayPage";
import RandomPicturePage from "./pages/RandomPicturePage";
import ArchivePage from "./pages/ArchivePage";
import FavouritesPage from "./pages/FavouritesPage";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/"
               element={<LandingPage/>}/>
        <Route path="/picoftheday"
               element={<PictureOfTheDayPage makeFavourite={()=>{}} removeFavourite={() => {}}/>}/>
        <Route path="/randompicture"
               element={<RandomPicturePage makeFavourite={()=>{}} removeFavourite={() => {}}/>}/>
        <Route path="/archive"
               element={<ArchivePage makeFavourite={()=>{}} removeFavourite={() => {}}/>}/>
        <Route path="/favourites"
               element={<FavouritesPage makeFavourite={()=>{}} removeFavourite={() => {}}/>}/>
      </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
