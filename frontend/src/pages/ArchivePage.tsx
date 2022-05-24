import useArchive from "../hooks/useArchive";
import "../styling/PictureOfTheDay.css";
import Picture from "../components/Picture";

export default function ArchivePage(){
    const archivePictures = useArchive()
    if (!archivePictures){
        return <div></div>
    }
    return (
        <div>
            {archivePictures.map(currentPicture=>{
                return <Picture nasaPicture={currentPicture}/>
            })}
        </div>
    )

}