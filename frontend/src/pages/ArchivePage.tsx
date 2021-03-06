import useArchive from "../hooks/useArchive";
import "../styling/Picture.css";
import Picture from "../components/Picture";
import {NasaPicture} from "../model/NasaPicture";

type ArchivePageProps = {
    makeFavourite: (nasaPicture: NasaPicture) => void;
    removeFavourite : (id : string) => void
}
export default function ArchivePage({makeFavourite, removeFavourite}:ArchivePageProps){
    const {archivePictures, loadNextPage} = useArchive()
    const onLoadMore = () => {loadNextPage()}
    if (!archivePictures){
        return <div></div>
    }
    return (
        <div>
            {archivePictures.sort((pic1, pic2)=> (Number(new Date (pic2.date)) - Number(new Date(pic1.date))))
                .map(currentPicture=>{
                return <Picture nasaPicture={currentPicture}
                                makeFavourite={makeFavourite}
                                removeFavourite={removeFavourite}
                                key={currentPicture.date}/>
            })}
            <button onClick={onLoadMore}>Load More</button>
        </div>
    )

}