import React from 'react';
import './App.css';
import LandingPage from "./pages/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PictureOfTheDay from "./components/PictureOfTheDay";
import RandomPicture from "./components/RandomPicture";
import ArchivePage from "./pages/ArchivePage";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Routes>
        <Route path="/"
               element={<LandingPage/>}/>
        <Route path="/picoftheday"
               element={<PictureOfTheDay/>}/>
        <Route path="/randompicture"
               element={<RandomPicture/>}/>
        <Route path="/archive"
               element={<ArchivePage/>}/>
      </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
