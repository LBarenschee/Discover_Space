import {useContext, useEffect, useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {getOwnPicture, postOwnPicture} from "../service/api-service";
import {toast} from "react-toastify";
import {AuthContext} from "../context/AuthProvider";

export default function usePictures(){
    const [pictures, setPictures] = useState<NasaPicture[]>([]);
    const {token} = useContext(AuthContext);


    useEffect( () =>{
        getOwnPicture(token)
            .then(pictures => setPictures(pictures))
            .catch(()=> toast.error("No pictures available"))
    },[token])

    const addPicture = (newPicture: Omit<NasaPicture, "id">) => {
        postOwnPicture(newPicture)
            .then(addedPicture => setPictures([...pictures, addedPicture]))
    }



    return{pictures, addPicture}

}