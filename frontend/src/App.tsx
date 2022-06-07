import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PictureOfTheDayPage from "./pages/PictureOfTheDayPage";
import RandomPicturePage from "./pages/RandomPicturePage";
import ArchivePage from "./pages/ArchivePage";
import FavouritesPage from "./pages/FavouritesPage";
import MyPicturesPage from "./pages/MyPicturesPage";
import useFavourites from "./hooks/useFavourites";


function App() {
    const {favouritePictures, makeFavourite, removeFavourite} = useFavourites()
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/"
               element={<LandingPage/>}/>
        <Route path="/picoftheday"
               element={<PictureOfTheDayPage makeFavourite={makeFavourite} removeFavourite={removeFavourite}/>}/>
        <Route path="/randompicture"
               element={<RandomPicturePage makeFavourite={makeFavourite} removeFavourite={removeFavourite}/>}/>
        <Route path="/archive"
               element={<ArchivePage makeFavourite={makeFavourite} removeFavourite={removeFavourite}/>}/>
        <Route path="/favourites"
               element={<FavouritesPage makeFavourite={makeFavourite} removeFavourite={removeFavourite} favouritePictures={favouritePictures}/>}/>
        <Route path="/mypictures"
               element={<MyPicturesPage makeFavourite={()=>{}} removeFavourite={() => {}}/>}/>
      </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
