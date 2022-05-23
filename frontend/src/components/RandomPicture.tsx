import "./RandomPicture.css";
import useRandomPicture from "../hooks/useRandomPicture";


export default function RandomPicture (){
    const randomPicture = useRandomPicture()
    if(!randomPicture){
        return <div></div>
    }
    return <div className={"randompicture"}>
        <img className={"img"} src={randomPicture.url} alt={""}/>
        <p className={"title"}>{randomPicture.title}</p>
        <p className={"date"}>{randomPicture.date}</p>
        <p className={"explanation"}>{randomPicture.explanation}</p>
        <p className={"copyright"}>Copyright: {randomPicture.copyright}</p>
        <p className={"hdurl"}>Hi-res version: <a href={randomPicture.hdurl}>{randomPicture.hdurl}</a></p>
    </div>

}