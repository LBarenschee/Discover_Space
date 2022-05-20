import {useEffect, useState} from "react";
import {getRandomPicture} from "../service/api-service";
import {NasaPicture} from "../model/NasaPicture";

export default function useRandomPicture() {
    const [randomPicture, setRandomPicture] = useState<NasaPicture> ();
    useEffect (() => {
        getRandomPicture ()
            .then (randomPicture => setRandomPicture (randomPicture))
            .catch (() => console.error ("Can't find Random Picture"))
    }, [])
    return randomPicture
}