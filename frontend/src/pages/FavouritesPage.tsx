import useFavourites from "../hooks/useFavourites";
import Picture from "../components/Picture";
import "../styling/PictureOfTheDay.css";
import {NasaPicture} from "../model/NasaPicture";

type FavouritesPageProps = {
    makeFavourite: (nasaPicture: NasaPicture) => void;
    removeFavourite : (id : string) => void
}

export default function FavouritesPage ({makeFavourite, removeFavourite} : FavouritesPageProps){
    const favouritePictures = useFavourites()
    if(!favouritePictures) {
        return <div></div>
    }
    return (
        <div>
            {favouritePictures.favouritePictures.map(currentPicture=>{
                return <Picture nasaPicture={currentPicture}
                                makeFavourite={makeFavourite}
                                removeFavourite={favouritePictures.removeFavourite}/>
            })}
        </div>
    )
}