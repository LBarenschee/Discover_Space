import {useEffect, useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {getOwnPicture, postOwnPicture} from "../service/api-service";
import {toast} from "react-toastify";

export default function (){
    const [pictures, setPictures] = useState<NasaPicture[]>([]);

    useEffect( () =>{
        getOwnPicture()
            .then(pictures => setPictures(pictures))
            .catch(()=> toast.error("No pictures available"))
    },[])

    const addPicture = (newPicture: Omit<NasaPicture, "id">) => {
        postOwnPicture(newPicture)
            .then(addedPicture => setPictures([...pictures, addedPicture]))
    }



    return{pictures, addPicture}

}