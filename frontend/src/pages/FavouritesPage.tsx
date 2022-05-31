import useFavourites from "../hooks/useFavourites";
import Picture from "../components/Picture";
import "../styling/PictureOfTheDay.css";

type FavouritesPageProps = {
    removePicture : (id : string) => void
}

export default function FavouritesPage ({removePicture} : FavouritesPageProps){
    const favouritePictures = useFavourites()
    if(!favouritePictures) {
        return <div></div>
    }
    return (
        <div>
            {favouritePictures.map(currentPicture=>{
                return <Picture nasaPicture={currentPicture} removePicture={removePicture}/>
            })}

        </div>
    )
}