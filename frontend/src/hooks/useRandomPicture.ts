import {useContext, useEffect, useState} from "react";
import {getRandomPicture} from "../service/api-service";
import {NasaPicture} from "../model/NasaPicture";
import {AuthContext} from "../context/AuthProvider";

export default function useRandomPicture() {
    const [randomPicture, setRandomPicture] = useState<NasaPicture> ();
    const {token} = useContext(AuthContext);

    useEffect (() => {
        getRandomPicture (token)
            .then (randomPicture => setRandomPicture (randomPicture))
            .catch (() => console.error ("Can't find Random Picture"))
    }, [token])
    return randomPicture
}