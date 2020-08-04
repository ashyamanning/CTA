import React, { useState } from "react";
import { storage } from "../../firebase";
import { apiURL } from "../../util/apiURL";
import axios from "axios";


const Upload = () => {
    const [video, setVideo] = useState(null);
    const [videoURL, setVideoURL] = useState("");
    const [progress, setProgress] = useState(0);
    
    const bucketName = "videos";
    const filePath = storage.ref(`${bucketName}/${video.name}`).put(video);

    const handleChange = (e) => {
        const video = e.target.files[0];
        const types = ["video/mp4", "video/mov", "video/ogg", "video/quicktime"];
        // debugger;
        if (types.every((type) => video.type !== type)) {
            alert(`${video.type} is not supported format`);
        } else {
            setVideo((videoFile) => video);
        }
    };
    
    const handleUpload = () => {
        if (video === "") {
            alert('PLease choose a valid file before uploading!')
        } else {
            alert(
                `Selected file: ${filePath.current.files[0].name}`
            );
            const uploadTask = filePath;
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progress);
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("videos")
                        .child(video.name)
                        .getDownloadURL()
                        .then((fireBaseURL) => {
                            setVideoURL(fireBaseURL);
                        });
                }
            )
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <progress value={progress} max="100"/>
            <br />
            <label>
                Upload file:
                <input type="file" ref={filePath} onChange={handleChange}/>
            </label>
            <br />
            <button type="button" onClick={handleUpload}>Upload</button>
        </form>
    )
};

export default Upload;