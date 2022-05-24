import {useEffect, useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {getArchive} from "../service/api-service";

export default function useArchive(){
    const [archivePictures, setArchivePictures] = useState<NasaPicture[]>();

    useEffect(() =>{
        getArchive()
            .then(archivePictures => setArchivePictures(archivePictures))
            .catch(()=> console.error("Can't show Archive"))
    }, [])
    return archivePictures
}