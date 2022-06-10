import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage";
import {Route, Routes} from "react-router-dom";
import PictureOfTheDayPage from "./pages/PictureOfTheDayPage";
import RandomPicturePage from "./pages/RandomPicturePage";
import ArchivePage from "./pages/ArchivePage";
import FavouritesPage from "./pages/FavouritesPage";
import MyPicturesPage from "./pages/MyPicturesPage";
import useFavourites from "./hooks/useFavourites";
import LoginPage from "./pages/LoginPage";
import RequireAuth from "./routing/RequireAuth";


function App() {
    const {favouritePictures, makeFavourite, removeFavourite} = useFavourites()
  return (
    <div className="App">
      <Routes>
        <Route path="/"
               element={<LoginPage/>}/>
      <Route element={<RequireAuth/>}>
        <Route path="/landing"
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
      </Route>
          </Routes>
      </div>
  );
}

export default App;
