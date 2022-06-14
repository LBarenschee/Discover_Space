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

    const addPicture = (newNasaPictureFormData: FormData) => {
        return postOwnPicture(newNasaPictureFormData, token)
            .then(addedPicture => setPictures([...pictures, addedPicture]))
            .catch( ()=> toast.error("No picture was added"))
    }
    return{pictures, addPicture}
}