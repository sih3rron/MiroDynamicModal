'use client'

import { useState, useEffect, useReducer } from 'react';

export default function Form() {

    const [modalImage, setModalImage] = useState(null);
    const [imagePosition, setImagePosition] = useState('start');
    const [modalHeading, setModalHeading] = useState('');
    const [paragraphOne, setParagraphOne] = useState('');
    const [paragraphTwo, setParagraphTwo] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [linkText, setLinkText] = useState('');
    const [buttonCta, setButtonCta] = useState('');
    const [storage, setStorage] = useState(null);

    const formData = {
        image: modalImage,
        imagePosition: imagePosition,
        heading: modalHeading,
        paragraphOne: paragraphOne,
        paragraphTwo: paragraphTwo,
        link: linkUrl,
        linkText: linkText,
        buttonCta: buttonCta,
        storage: storage,
    };

    const handleImageUpload = (event) => {
        setModalImage(event.target.files[0]);
    }

    const handleImagePosition = (event) => {
        setImagePosition(event.target.value);
        console.log("Image Position: ", event.target.value);
    }

    const handleModalHeading = (event) => {
        setModalHeading(event.target.value);
        console.log("Heading: ", event.target.value);
    }

    const handleParagraphOne = (event) => {
        setParagraphOne(event.target.value);
        console.log("P1: ", event.target.value);
    }

    const handleParagraphTwo = (event) => {
        setParagraphTwo(event.target.value);
        console.log("P2: ", event.target.value);
    }

    const handleLinkUrl = (event) => {
        setLinkUrl(event.target.value);
        console.log("Link: ", event.target.value);
    }

    const handleLinkText = (event) => {
        setLinkText(event.target.value);
        console.log("Link Text: ", event.target.value);
    }

    const handleButtonCta = (event) => {
        setButtonCta(event.target.value);
        console.log("Button CTA: ", event.target.value);
    }

    const handleStorage = (event) => {
        setStorage(event.target.value);
        console.log("Storage: ", event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("Form", formData);
    }


    return (
        <>
            <div className="grid form-example bg-gray-100 p-4">

                <div className="cs1 ce6">
                    <h1 className="h1">Modal Form Content</h1>
                    <hr className="hr" />
                </div>

                <form className="cs1 ce6 form-example--main-content" onSubmit={handleSubmit}>

                    <div className="form-group border border-slate-400 p-4 bg-blue-100">
                        <label htmlFor="image-upload">Upload an Image with Organisation logo and name</label>
                        <input className="" type="file" id="image-upload" onChange={handleImageUpload} required/>
                    </div>

                    <div className="form-group bg-gray-100 p-4">
                        <label htmlFor="image-positioning">Image positioning</label>
                        <select className="select" id="image-positioning" onChange={handleImagePosition}>
                            <option value="start">Left</option>
                            <option value="center">Center</option>
                            <option value="end">Right</option>
                        </select>
                    </div>


                    <div className="form-group bg-gray-100 p-4">
                        <label htmlFor="modal-heading">Heading</label>
                        <input className="input" type="text" id="modal-heading" maxLength={200} placeholder="Enter your bold heading - max 200 characters" onChange={handleModalHeading} />
                    </div>

                    <div className="form-group bg-gray-100 p-4">
                        <label htmlFor="paragraph-one">First paragraph</label>
                        <textarea
                            className="textarea"
                            placeholder="Enter a single paragraph of continuous text - max 450 characters"
                            spellCheck="true"
                            maxLength={450}
                            id="paragraph-one"
                            onChange={handleParagraphOne}
                            required></textarea>
                    </div>

                    <div className="form-group bg-gray-100 p-4">
                        <label htmlFor="paragraph-two">Optional second paragraph</label>
                        <textarea
                            className="textarea"
                            placeholder="Enter a second paragraph of continuous text - max 450 characters"
                            spellCheck="true"
                            id="paragraph-two"
                            maxLength={450}
                            onChange={handleParagraphTwo}></textarea>
                    </div>

                    <div className="form-group bg-gray-100 p-4">
                        <label htmlFor="link-url">Add an external link</label>
                        <textarea
                            className="textarea"
                            placeholder="Add the URL of the external link including the https:// prefix"
                            spellCheck="true"
                            id="link-url"
                            pattern="^https://.*"
                            onChange={handleLinkUrl}></textarea>
                    </div>


                    <div className="form-group bg-gray-100 p-4">
                        <label htmlFor="link-text">What should the text read?</label>
                        <textarea
                            className="textarea"
                            placeholder="Add text for the user to click on"
                            spellCheck="true"
                            id="link-text"
                            maxLength={50}
                            onChange={handleLinkText}></textarea>
                    </div>

                    <div className="form-group bg-gray-100 p-4">
                        <label htmlFor="button-cta">What should the CTA Button text read?</label>
                        <textarea
                            className="textarea"
                            placeholder="What should the text on the button read? The default is 'Accept'"
                            spellCheck="true"
                            maxLength={20}
                            id="button-cta"
                            onChange={handleButtonCta}
                            required></textarea>
                    </div>

                    <div className="form-group bg-gray-100 p-4">
                        <label htmlFor="storage">How would you like to prevent the Modal from repeat views?</label>
                        <select className="select" id="storage" onChange={handleStorage}>
                            <option value="db">Database</option>
                            <option value="cookie">Cookies</option>
                            <option value="localstorage">LocalStorage</option>
                        </select>
                    </div>

                    <div className="flex flex-row items-end justify-end p-2">

                        <button type="submit" className="button button-primary">
                            <span className="icon icon-arrow-right"></span>
                            Submit
                        </button>

                    </div>

                </form>

            </div>
        </>
    );
}