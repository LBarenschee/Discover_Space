import useNasaPicture from "../hooks/useNasaPicture";



export default function PictureOfTheDay (){
    const pictureOfTheDay = useNasaPicture()
    if(!pictureOfTheDay){
        return <div></div>
    }
    return <div className={"picture-of-the-day"}>
        <p>{pictureOfTheDay.title}</p>
        <img src={pictureOfTheDay.url} alt={""}/>
        <p>{pictureOfTheDay.date}</p>
        <p>{pictureOfTheDay.explanation}</p>
        <p>Copyright: {pictureOfTheDay.copyright}</p>
        <p>{pictureOfTheDay.url}</p>

        <p>{pictureOfTheDay.hdurl}</p>
        <p>{pictureOfTheDay.media_type}</p>
        <p>{pictureOfTheDay.service_version}</p>
    </div>

}
