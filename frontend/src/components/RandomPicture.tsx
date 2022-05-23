import "../styling/RandomPicture.css";
import useRandomPicture from "../hooks/useRandomPicture";
import {useState} from "react";


export default function RandomPicture (){
    const [explanationFull, setExplanationFull] = useState<boolean> (false);
    const randomPicture = useRandomPicture()
    if(!randomPicture){
        return <div></div>
    }
    return <div className={"randompicture"}>
        <img className={"img"} src={randomPicture.url} alt={""}/>
        <p className={"title"}>{randomPicture.title}</p>
        <p className={"date"}>{randomPicture.date}</p>
        {explanationFull ?
            <p className={"explanation"}>{randomPicture.explanation}</p>
            :
            <>
                <p className={"explanation"}>{randomPicture.explanation.slice(0,80)}</p>
                <button onClick={() => setExplanationFull (true)}>more</button>
            </>
        }
        <p className={"copyright"}>Copyright: {randomPicture.copyright}</p>
        <p className={"hdurl"}> <a href={randomPicture.hdurl}>{"Click for Hi-Res Version"}</a></p>
    </div>

}