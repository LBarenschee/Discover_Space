import useNasaPicture from "../hooks/useNasaPicture";
import "../styling/PictureOfTheDay.css";

import Picture from "../components/Picture";


export default function PictureOfTheDayPage() {
    const pictureOfTheDay = useNasaPicture ()
    if (!pictureOfTheDay) {
        return <div></div>
    }
    return (
        <div>
             <Picture nasaPicture={pictureOfTheDay}/>
        </div>
    )
}
