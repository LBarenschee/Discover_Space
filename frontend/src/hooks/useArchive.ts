import {useContext, useEffect, useState} from "react";
import {NasaPicture} from "../model/NasaPicture";
import {getArchive} from "../service/api-service";
import {toast} from "react-toastify";
import {AuthContext} from "../context/AuthProvider";

export default function useArchive(){
    const [archivePictures, setArchivePictures] = useState<NasaPicture[]>();
    const [nextPageToLoad, setNextPageToLoad] = useState<number>(1);
    const {token} = useContext(AuthContext)
    const loadNextPage = () =>{
        getArchive(nextPageToLoad, token)
            .then(nextPage => setArchivePictures(archivePictures?[...archivePictures, ...nextPage] : nextPage))
            .catch(()=> toast.error("Can't show Archive"))
        setNextPageToLoad(nextPageToLoad +1)
    }

    useEffect(() =>{
        loadNextPage()
    },[])

    return {archivePictures, loadNextPage}
}