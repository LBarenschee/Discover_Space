import usePictureOfTheDay from "../hooks/usePictureOfTheDay";
import "../styling/Picture.css";
import Picture from "../components/Picture";
import {NasaPicture} from "../model/NasaPicture";

type PictureOfTheDayPageProps = {
    makeFavourite: (nasaPicture: NasaPicture) => void;
    removeFavourite : (id : string) => void
}

export default function PictureOfTheDayPage({makeFavourite, removeFavourite}:PictureOfTheDayPageProps) {
    const pictureOfTheDay = usePictureOfTheDay()
    if (!pictureOfTheDay) {
        return <div></div>
    }
    return (
        <div>
             <Picture nasaPicture={pictureOfTheDay}
                      makeFavourite={makeFavourite}
                      removeFavourite={removeFavourite}/>
        </div>
    )
}
