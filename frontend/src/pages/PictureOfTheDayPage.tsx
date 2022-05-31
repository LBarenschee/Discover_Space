import usePictureOfTheDay from "../hooks/usePictureOfTheDay";
import "../styling/PictureOfTheDay.css";

import Picture from "../components/Picture";


export default function PictureOfTheDayPage() {
    const pictureOfTheDay = usePictureOfTheDay ()
    if (!pictureOfTheDay) {
        return <div></div>
    }
    return (
        <div>
             <Picture nasaPicture={pictureOfTheDay}/>
        </div>
    )
}
