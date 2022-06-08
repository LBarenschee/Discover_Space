import {ChangeEvent, FormEvent, useState} from "react";
import {toast} from 'react-toastify';
import {NasaPicture} from "../model/NasaPicture";



type OwnPictureProps={
    addPicture : (newNasaPictureFormData: FormData) => Promise<NasaPicture>
}

export default function AddOwnPicture({addPicture}: OwnPictureProps){
    const [title, setTitle] = useState(``)
    const [date, setDate] = useState(``)
    const [explanation, setExplanation] = useState(``)
    const [copyright, setCopyright] = useState(``)
    const [url, setUrl] = useState(``)
    const [hdurl, setHdurl] = useState(``)
    const [image, setImage] = useState<File>()

    const onAdd = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!title){
            toast.error("Title is required.")
            return
        }
        if(!image){
            toast.error("No file selected.")
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
        const formData = new FormData()
        formData.append(
            'file',
            image
        )
        formData.append(
            'picturedto',
            new Blob([JSON.stringify(newPicture)], {type : "application/json"})
        )
        addPicture(formData);
        setTitle(``)



    }


    const fileChangedHandler = (event : ChangeEvent<HTMLInputElement>) =>{
        const file = event.target.files?.item(0)
        if(file !== null){
            setImage(file)
        }
    }

    return(
        <div className={"new-pciture"}>
            <form onSubmit={onAdd}>
                <input type={"text"} placeholder="Title" value={title} onChange={event => setTitle(event.target.value)}/>
                <input type={"text"} placeholder="Date" value={date} onChange={event => setDate(event.target.value)}/>
                <input type={"text"} placeholder="Explanation" value={explanation} onChange={event => setExplanation(event.target.value)}/>
                <input type={"text"} placeholder="Copyright" value={copyright} onChange={event => setCopyright(event.target.value)}/>
                <input type={"text"} placeholder="Url" value={url} onChange={event => setUrl(event.target.value)}/>
                <input type={"text"} placeholder="HD-Url" value={hdurl} onChange={event => setHdurl(event.target.value)}/>
                <input type={"file"} onChange={fileChangedHandler}/>
                <button>save</button>
            </form>

        </div>
    )
}