import "../styling/LandingPage.css";
import React from "react";
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate()
    return (
        <div className="landingpage">
            <button  onClick={() => navigate(`/picoftheday`)}>Picture Of The Day</button>
            <button  onClick={() => navigate(`/randompicture`)}>Random Picture</button>
            <button>My Favourites</button>
            <button onClick={() => navigate(`/archive`)}>Archive</button>
        </div>
    );
}

export default LandingPage;
