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

export function getArchive(pageNumber : number=1){
    return axios.get("/archive?pageNumber=" + pageNumber)
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

export const postOwnPicture: (newNasaPictureFormData : any) => Promise<NasaPicture> = (newNasaPictureFormData) => {
    return axios.post("/mypictures", newNasaPictureFormData)
                .then(response => response.data)
}

export function getOwnPicture(){
    return axios.get("/mypictures")
                .then(response => response.data)
}