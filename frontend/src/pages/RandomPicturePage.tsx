import "../styling/RandomPicture.css";
import useRandomPicture from "../hooks/useRandomPicture";
import Picture from "../components/Picture";
import {NasaPicture} from "../model/NasaPicture";

type RandomPicturePageProps = {
    makeFavourite: (nasaPicture: NasaPicture) => void;
    removeFavourite : (id : string) => void
}

export default function RandomPicturePage ({makeFavourite, removeFavourite}:RandomPicturePageProps){
    const randomPicture = useRandomPicture()
    if(!randomPicture){
        return <div></div>
    }
    return (
        <div>
            <Picture nasaPicture={randomPicture}
                     makeFavourite={makeFavourite}
                     removeFavourite={removeFavourite}/>
        </div>
    )

}