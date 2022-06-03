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

export const deleteFavourite: (id: string) => Promise<void> = (id: string) => {
    return axios.delete(`/favourites/${id}`)
}

export const postOwnPicture: (newPicture: Omit<NasaPicture, "id">) =>
    Promise<NasaPicture> = (newPicture) => {
    return axios.post("/mypictures")
                .then(response => response.data)
}