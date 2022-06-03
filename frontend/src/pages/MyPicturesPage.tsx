import {NasaPicture} from "../model/NasaPicture";
import usePicture from "../hooks/usePictures";
import Picture from "../components/Picture";


type MyPicturesPageProps = {
    makeFavourite: (nasaPicture: NasaPicture) => void;
    removeFavourite : (id : string) => void
}

export default function MyPicturesPage({makeFavourite, removeFavourite}: MyPicturesPageProps){
    const {pictures} = usePicture()
    if(!pictures){
        return<div></div>
    }
    return(
        <div>
            {pictures
                .sort ((pic1, pic2) => (Number (new Date (pic2.date)) - Number (new Date (pic1.date))))
                .map (currentPicture => {
                return <Picture nasaPicture={currentPicture}
                                makeFavourite={makeFavourite}
                                removeFavourite={removeFavourite}/>
            })}
        </div>
    )
}
