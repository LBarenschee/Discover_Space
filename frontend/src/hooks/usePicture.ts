import {useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {deletePicture} from "../service/api-service";



export default function usePicture(){
    const [pictures, setPictures] = useState<NasaPicture[]>([]);

    const removePicture = (id: string) =>{
        deletePicture(id)
            .then(()=>setPictures(pictures.filter(picture => picture.id !==id)))
            .catch(() => console.error())
    }
}