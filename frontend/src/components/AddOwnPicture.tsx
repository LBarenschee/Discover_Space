import {FormEvent, useState} from "react";
import {toast} from 'react-toastify';
import {NasaPicture} from "../model/NasaPicture";


type OwnPictureProps={
    addPicture : (newPicture: Omit<NasaPicture, "id">) => void
}

export default function AddOwnPicture({addPicture}: OwnPictureProps){
    const [title, setTitle] = useState(``)
    const [date, setDate] = useState(``)
    const [explanation, setExplanation] = useState(``)
    const [copyright, setCopyright] = useState(``)
    const [url, setUrl] = useState(``)
    const [hdurl, setHdurl] = useState(``)

    const onAdd = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!title){
            toast.error("Title is required");
            return
        }
        const newPicture : Omit<NasaPicture, "id">= {
            title : title,
            date : date,
            explanation : explanation,
            copyright : copyright,
            url : url,
            hdurl : hdurl,
        }
        addPicture(newPicture);
        setTitle(``)
    }
    return(
        <div className={"new-pciture"}>
            <form onSubmit={onAdd}>
                <input type={"text"} placeholder="Title" value={title} onChange={event => setTitle(event.target.value)}/>
                <input type={"text"} placeholder="Date" value={date} onChange={event => setTitle(event.target.value)}/>
                <input type={"text"} placeholder="Explanation" value={explanation} onChange={event => setTitle(event.target.value)}/>
                <input type={"text"} placeholder="Copyright" value={copyright} onChange={event => setTitle(event.target.value)}/>
                <input type={"text"} placeholder="Url" value={url} onChange={event => setTitle(event.target.value)}/>
                <input type={"text"} placeholder="HD-Url" value={hdurl} onChange={event => setTitle(event.target.value)}/>
            </form>

        </div>
    )
}