import "../styling/RandomPicture.css";
import useRandomPicture from "../hooks/useRandomPicture";
import Picture from "../components/Picture";


export default function RandomPicturePage (){
    const randomPicture = useRandomPicture()
    if(!randomPicture){
        return <div></div>
    }
    return (
        <div>
            <Picture nasaPicture={randomPicture}/>
        </div>
    )

}