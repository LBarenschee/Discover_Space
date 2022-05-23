import useNasaPicture from "../hooks/useNasaPicture";
import "../styling/PictureOfTheDay.css";
import {useState} from "react";


export default function PictureOfTheDay() {
    const [explanationFull, setExplanationFull] = useState<boolean> (false);
    const pictureOfTheDay = useNasaPicture ()
    if (!pictureOfTheDay) {
        return <div></div>
    }
    return <div className={"picture-of-the-day"}>
        <img className={"img"} src={pictureOfTheDay.url} alt={""}/>
        <p className={"title"}>{pictureOfTheDay.title}</p>
        <p className={"date"}>{pictureOfTheDay.date}</p>
        {explanationFull ?
            <p className={"explanation"}>{pictureOfTheDay.explanation}</p>
            :
            <>
                <p className={"explanation"}>{pictureOfTheDay.explanation.slice (0, 150)}...</p>
                <button onClick={() => setExplanationFull (true)}>more</button>
            </>
        }
        <p className={"copyright"}>Copyright: {pictureOfTheDay.copyright}</p>
        <p className={"hdurl"}><a href={pictureOfTheDay.hdurl}>{"Click for Hi-Res Version"}</a></p>
    </div>

}
