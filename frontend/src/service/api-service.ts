import axios from "axios";
import {NasaPicture} from "../model/NasaPicture";

export const getPictureOfTheDay: (token?: string) => Promise<NasaPicture> = (token) =>{
    return axios.get("/api/picoftheday", token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export const getRandomPicture: (token?: string) => Promise<NasaPicture> = (token) =>{
    return axios.get("/api/randompicture", token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export const getArchive:(pageNumber: number, token?: string) =>
    Promise<NasaPicture[]> = (pageNumber = 1, token) =>{
    return axios.get("/api/archive?pageNumber=" + pageNumber, token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export const getFavourites:(token?: string) =>
    Promise<NasaPicture[]> = (token) =>{
    return axios.get("/api/favourites", token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export const postFavourites:(newNasaPicture: NasaPicture, token?: string) =>
    Promise<NasaPicture> = (newNasaPicture, token) =>{
    return axios.post("/api/favourites", newNasaPicture, token
        ? {headers: {"Authorization": token}}
        : {})
        .then(response => response.data)
}

export const deleteFavourite: (id: string, token?: string) =>
    Promise<void> = (id: string, token) => {
    return axios.delete(`/api/favourites/${id}`, token
        ? {headers: {"Authorization": token}}
        : {})
}

export const postOwnPicture: (newNasaPictureFormData : any, token?: string) =>
    Promise<NasaPicture> = (newNasaPictureFormData, token) => {
    return axios.post("/api/mypictures", newNasaPictureFormData, token
        ? {headers: {"Authorization": token}}
        : {})
                .then(response => response.data)
}

export function getOwnPicture(token?: string){
    return axios.get("/api/mypictures", token
        ? {headers: {"Authorization": token}}
        : {})
                .then(response => response.data)
}