
import Picture from "../components/Picture";
import "../styling/Picture.css";
import {NasaPicture} from "../model/NasaPicture";

type FavouritesPageProps = {
    makeFavourite: (nasaPicture: NasaPicture) => void;
    removeFavourite : (id : string) => void
    favouritePictures : NasaPicture[]
}

export default function FavouritesPage ({makeFavourite, removeFavourite, favouritePictures} : FavouritesPageProps){
    if(!favouritePictures) {
        return <div></div>
    }
    return (
        <div>
            {favouritePictures.map(currentPicture=>{
                return <Picture nasaPicture={currentPicture}
                                makeFavourite={makeFavourite}
                                removeFavourite={removeFavourite}/>
            })}
        </div>
    )
}