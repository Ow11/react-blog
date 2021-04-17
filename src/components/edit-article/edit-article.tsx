import React, {useState} from 'react';
import "./edit-article.css";

const ImageUploader = (props: any) => {
    const [image, setImage] = useState(undefined);

    const onUploadHandler = (event: any) => {
        setImage(event.target.files[0]);
    };

    const onDelHandler = (event: any) => {
        setImage(undefined);
    };

    if (image !== undefined) return (
        <>
            <img src={URL.createObjectURL(image)} alt="The uploaded image" />
            <div className="image-options">
                <label htmlFor="real-input" >Upload new</label>
                <button onClick={onDelHandler}>Delete</button>
                <input type="file" id="real-input" onChange={onUploadHandler} hidden />
            </div>
        </>
    );

    return (
        <>
            <input type="file" id="real-input" onChange={onUploadHandler} hidden />
            <label htmlFor="real-input" className="btn-blue" id="image">Upload an Image</label>
        </>
    );
}

export const EditArticle = (props: any) => {
    const initialTitle = (props.article) ? props.article.title : "";
    const initialText = (props.article) ? props.article.content : "";

    const [title, setTitle] = useState(initialTitle);
    const [text, setText] = useState(initialText);

    const onTitleHandle = (event: any) => {
        setTitle(event.target.value);
    }

    const onTextHandle = (event: any) => {
        setText(event.target.value);
    }

    return (
        <div className="edit-article">
            <label htmlFor="title">Article Title</label>
            <input id="title" placeholder="My First Article" value={ title } onChange={ onTitleHandle } />
            <label htmlFor="image">Featured Image</label>
            <ImageUploader />
            <label htmlFor="content">Content</label>
            <textarea id="content" placeholder="Supports markdown. Yay!" value={ text } onChange={ onTextHandle } />
        </div>
    );
}