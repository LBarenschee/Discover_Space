import useArchive from "../hooks/useArchive";
import "../styling/PictureOfTheDay.css";

export default function ArchivePage(){

    const archivePage = useArchive()
    if (!archivePage){
        return <div></div>
    }
    return <div className={"picture-of-the-day"}>
        <img className={"img"} src={archivePage.url} alt={""}/>
        <p className={"title"}>{archivePage.title}</p>
        <p className={"date"}>{archivePage.date}</p>
        <p className={"explanation"}>{archivePage.explanation}</p>
        <p className={"copyright"}>Copyright: {archivePage.copyright}</p>
        <p className={"hdurl"}><a href={archivePage.hdurl}>{"Click for Hi-Res Version"}</a></p>
    </div>

}