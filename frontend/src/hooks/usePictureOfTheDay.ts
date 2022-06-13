import {useContext, useEffect, useState} from "react";
import {getPictureOfTheDay} from "../service/api-service";
import {NasaPicture} from "../model/NasaPicture";
import {AuthContext} from "../context/AuthProvider";
import {toast} from "react-toastify";

export default function usePictureOfTheDay(){
    const [pictureOfTheDay, setPictureOfTheDay] = useState<NasaPicture>();
    const {token} = useContext(AuthContext);

    useEffect( () =>{
        getPictureOfTheDay(token)
            .then(pictureOfTheDay => setPictureOfTheDay(pictureOfTheDay))
            .catch(()=> toast.error("Can't find Picture Of The Day"))
    },[token])
    return pictureOfTheDay


}