
import useRandomPicture from "../hooks/useRandomPicture";


export default function RandomPicture (){
    const randomPicture = useRandomPicture()
    if(!randomPicture){
        return <div></div>
    }
    return <div className={"randompicture"}>
        <p>{randomPicture.title}</p>
        <img src={randomPicture.url} alt={""}/>
        <p>{randomPicture.date}</p>
        <p>{randomPicture.explanation}</p>
        <p>Copyright: {randomPicture.copyright}</p>
        <p>{randomPicture.url}</p>

        <p>{randomPicture.hdurl}</p>
        <p>{randomPicture.media_type}</p>
        <p>{randomPicture.service_version}</p>
    </div>

}