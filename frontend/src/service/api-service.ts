
import axios from "axios";

export function getPictureOfTheDay(){
    return axios.get("/picoftheday")
        .then(response => response.data)
}