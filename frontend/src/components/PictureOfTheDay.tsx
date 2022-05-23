import useNasaPicture from "../hooks/useNasaPicture";
import "./PictureOfTheDay.css";


export default function PictureOfTheDay (){
    const pictureOfTheDay = useNasaPicture()
    if(!pictureOfTheDay){
        return <div></div>
    }
    return <div className={"picture-of-the-day"}>
        <img className={"img"} src={pictureOfTheDay.url} alt={""}/>
        <p className={"title"}>{pictureOfTheDay.title}</p>
        <p className={"date"}>{pictureOfTheDay.date}</p>
        <p className={"explanation"}>{pictureOfTheDay.explanation}</p>
        <p className={"copyright"}>Copyright: {pictureOfTheDay.copyright}</p>
        <p className={"hdurl"}>Hi-res version: <a href={pictureOfTheDay.hdurl}>{pictureOfTheDay.hdurl}</a></p>

    </div>

}
