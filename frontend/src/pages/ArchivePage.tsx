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
            {archivePictures.sort((pic1, pic2)=> (Number(new Date (pic2.date)) - Number(new Date(pic1.date)))).map(currentPicture=>{
                return <Picture nasaPicture={currentPicture}/>
            })}
        </div>
    )

}