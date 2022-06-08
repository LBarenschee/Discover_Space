import {useEffect, useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {getArchive} from "../service/api-service";
import {toast} from "react-toastify";

export default function useArchive(){
    const [archivePictures, setArchivePictures] = useState<NasaPicture[]>();
    const [nextPageToLoad, setNextPageToLoad] = useState<number>(1);
    const loadNextPage = () =>{
        getArchive(nextPageToLoad)
            .then(nextPage => setArchivePictures(archivePictures?[...archivePictures, ...nextPage] : nextPage))
            .catch(()=> toast.error("Can't show Archive"))
        setNextPageToLoad(nextPageToLoad +1)
        console.log("bla")
    }

    useEffect(() =>{
        loadNextPage()
    }, [])

    return {archivePictures, loadNextPage}
}