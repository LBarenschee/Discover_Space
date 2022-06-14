import {useContext, useEffect, useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {deleteFavourite, getFavourites, postFavourites} from "../service/api-service";
import {toast} from "react-toastify";
import {AuthContext} from "../context/AuthProvider";

export default function useFavourites(){
    const [favouritePictures, setFavouritePictures] = useState<NasaPicture[]>([])
    const {token} = useContext(AuthContext)

    useEffect(()=>{
        getFavourites(token)
            .then(favouritePictures => setFavouritePictures(favouritePictures))
            .catch(()=> toast.error("Can't show Favourites"))
    }, [token])

    const makeFavourite =  (nasaPicture : NasaPicture) =>{
        postFavourites(nasaPicture, token)
            .then((nasaPicture)=> {setFavouritePictures([...favouritePictures, nasaPicture])
            })
            .then(()=> toast.success("picture added to favourites!"))
            .catch(() => toast.error("could not add to favourites."))
    }

    const removeFavourite = (id: string) =>{
        deleteFavourite(id, token)
            .then(()=>setFavouritePictures(favouritePictures.filter(picture => picture.id !==id)))
            .then(()=> toast.success("picture removed from favourites!"))
            .catch(() => toast.error("could not remove picture."))
    }
    return{
        makeFavourite, removeFavourite, favouritePictures
    }

}