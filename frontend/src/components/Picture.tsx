import "../styling/Picture.css";
import {useState} from "react";
import {NasaPicture} from "../model/NasaPicture";


type PictureProps = {
    nasaPicture: NasaPicture;
    makeFavourite: (nasaPicture: NasaPicture) => void;
    removeFavourite : (id: string) => void
    favouriteEnabled?: boolean
}

export default function Picture({nasaPicture, makeFavourite, removeFavourite, favouriteEnabled} : PictureProps){
    const [explanationFull, setExplanationFull] = useState<boolean> (false);

    return <div className={"picture"}>
        <p className={"title"}>{nasaPicture.title}</p>

        <img className={"img"} src={nasaPicture.url} alt={""}/>
        {!favouriteEnabled?
        <button className="button" onClick={()=> makeFavourite(nasaPicture)}>Add Favourite</button>
            :
            <button className="button" onClick={() => removeFavourite (nasaPicture.id)}>Remove Favourite</button>
        }
        <p className={"date"}>{nasaPicture.date}</p>

        {explanationFull ?
            <p className={"explanation"}>{nasaPicture.explanation}</p>
            :
            <div className="read-more-button">
                <p className={"explanation"}>{nasaPicture.explanation.slice (0, 150)}...<button className="button1" onClick={() => setExplanationFull (true)}>read more</button></p>
            </div>
        }
        <p className={"copyright"}>Copyright: {nasaPicture.copyright}</p>
        <p className={"hdurl"}><a href={nasaPicture.hdurl} target="blank" rel="noopener noreferrer">{"Click for Hi-Res Version"}</a></p>
    </div>

}