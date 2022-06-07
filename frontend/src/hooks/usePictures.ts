import {useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {postOwnPicture} from "../service/api-service";

export default function (){
    const [pictures, setPictures] = useState<NasaPicture[]>([]);

    const addPicture = (newPicture: Omit<NasaPicture, "id">) => {
        postOwnPicture(newPicture)
            .then(addedPicture => setPictures([...pictures, addedPicture]))
    }
    return{pictures, addPicture}

}