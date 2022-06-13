import "../styling/Picture.css";
import {useState} from "react";
import {NasaPicture} from "../model/NasaPicture";


type PictureProps = {
    nasaPicture: NasaPicture;
    makeFavourite: (nasaPicture: NasaPicture) => void;
    removeFavourite : (id: string) => void
}

export default function Picture({nasaPicture, makeFavourite, removeFavourite} : PictureProps){
    const [explanationFull, setExplanationFull] = useState<boolean> (false);

    return <div className={"picture"}>
        <img className={"img"} src={nasaPicture.url} alt={""}/>
        <button className="button" onClick={()=> makeFavourite(nasaPicture)}>Favourite</button>
        <button className="button" onClick={()=> removeFavourite(nasaPicture.id)}>Remove</button>
        <p className={"title"}>{nasaPicture.title}</p>
        <p className={"date"}>{nasaPicture.date}</p>

        {explanationFull ?
            <p className={"explanation"}>{nasaPicture.explanation}</p>
            :
            <>
                <p className={"explanation"}>{nasaPicture.explanation.slice (0, 150)}...</p>
                <button className="button1" onClick={() => setExplanationFull (true)}>read more</button>
            </>
        }
        <p className={"copyright"}>Copyright: {nasaPicture.copyright}</p>
        <p className={"hdurl"}><a href={nasaPicture.hdurl} target="blank" rel="noopener noreferrer">{"Click for Hi-Res Version"}</a></p>
    </div>

}
