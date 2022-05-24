
import axios from "axios";

export function getPictureOfTheDay(){
    return axios.get("/picoftheday")
        .then(response => response.data)
}

export function getRandomPicture(){
    return axios.get("/randompicture")
        .then(response => response.data)
}

export function getArchive(){
    return axios.get("/archive")
        .then(response => response.data)
}