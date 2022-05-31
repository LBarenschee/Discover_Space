
import "../styling/PictureOfTheDay.css";
import {useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {postFavourites, deletePicture} from "../service/api-service";

type PictureProps = {
    nasaPicture: NasaPicture
    removePicture : (id : string) => void
}

export default function Picture({nasaPicture, removePicture} : PictureProps){
    const [explanationFull, setExplanationFull] = useState<boolean> (false);

    return <div className={"picture-of-the-day"}>
        <img className={"img"} src={nasaPicture.url} alt={""}/>
        <button onClick={()=> postFavourites(nasaPicture)}>Favourite</button>
        <button onClick={()=> deletePicture(nasaPicture.id)}>Remove</button>
        <p className={"title"}>{nasaPicture.title}</p>
        <p className={"date"}>{nasaPicture.date}</p>

        {explanationFull ?
            <p className={"explanation"}>{nasaPicture.explanation}</p>
            :
            <>
                <p className={"explanation"}>{nasaPicture.explanation.slice (0, 150)}...</p>
                <button onClick={() => setExplanationFull (true)}>more</button>
            </>
        }
        <p className={"copyright"}>Copyright: {nasaPicture.copyright}</p>
        <p className={"hdurl"}><a href={nasaPicture.hdurl} target="blank" rel="noopener noreferrer">{"Click for Hi-Res Version"}</a></p>
    </div>

}
