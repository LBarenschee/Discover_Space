import {useEffect, useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {getArchive, getFavourites} from "../service/api-service";

export default function useFavourites(){
    const [favouritePictures, setFavouritePictures] = useState<NasaPicture[]>()

    useEffect(()=>{
        getFavourites()
            .then(favouritePictures => setFavouritePictures(favouritePictures))
            .catch(()=> console.error("Can't show Favourites"))
    }, [])
    return favouritePictures
}