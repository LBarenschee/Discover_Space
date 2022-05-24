import useFavourites from "../hooks/useFavourites";
import Picture from "../components/Picture";
import "../styling/PictureOfTheDay.css";

export default function FavouritesPage (){
    const favouritePictures = useFavourites()
    if(!favouritePictures) {
        return <div></div>
    }
    return (
        <div>
            {favouritePictures.map(currentPicture=>{
                return <Picture nasaPicture={currentPicture}/>
            })}
        </div>
    )
}