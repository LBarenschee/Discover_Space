import {useEffect, useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {deleteFavourite, getFavourites, postFavourites} from "../service/api-service";

export default function useFavourites(){
    const [favouritePictures, setFavouritePictures] = useState<NasaPicture[]>([])

    useEffect(()=>{
        getFavourites()
            .then(favouritePictures => setFavouritePictures(favouritePictures))
            .catch(()=> console.error("Can't show Favourites"))
    }, [])

    const makeFavourite =  (nasaPicture : NasaPicture) =>{
        postFavourites(nasaPicture)
            .then((nasaPicture)=> {setFavouritePictures([...favouritePictures, nasaPicture])
            })
    }

    const removeFavourite = (id: string) =>{
        deleteFavourite(id)
            .then(()=>setFavouritePictures(favouritePictures.filter(picture => picture.id !==id)))
            .catch(() => console.error())
    }

    return{
        makeFavourite, removeFavourite, favouritePictures
    }

}