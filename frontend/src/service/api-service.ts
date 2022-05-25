import axios from "axios";
import {NasaPicture} from "../model/NasaPicture";

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

export function getFavourites(){
    return axios.get("/favourites")
        .then(response => response.data)
}

export function postFavourites(newNasaPicture: NasaPicture){
    return axios.post("/favourites", newNasaPicture)
        .then(response => response.data)
}