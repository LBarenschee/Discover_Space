import "../styling/LandingPage.css";
import React from "react";
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const navigate = useNavigate()
    return (
        <div className="landingpage">
            <button className={"b1"} onClick={() => navigate(`/picoftheday`)}>Picture Of The Day</button>
            <button className={"b2"} onClick={() => navigate(`/randompicture`)}>Random Picture</button>
            <button className={"b3"}>My Favourites</button>
            <button className={"b4"}>Archive</button>
        </div>
    );
}

export default LandingPage;
