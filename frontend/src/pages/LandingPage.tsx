import "../styling/LandingPage.css";
import React from "react";
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate()
    return (
        <div className="landingpage">
            <button  onClick={() => navigate(`/picoftheday`)}>Picture Of The Day</button>
            <button  onClick={() => navigate(`/randompicture`)}>Random Picture</button>
            <button onClick={() => navigate(`/favourites`)}>My Favourites</button>
            <button onClick={() => navigate(`/archive`)}>Archive</button>
            <button onClick={() => navigate(`/mypictures`)}>My Pictures</button>
        </div>
    );
}

export default LandingPage;
