import React, { useState, useContext } from 'react';
import Upload from '../uploads/Upload';
import { apiURL } from '../../util/apiURL';
import { AuthContext } from '../../providers/AuthContext';
import axios from 'axios';

const PostUpload = () => {
    const API = apiURL();
    const { currentUser } = useContext(AuthContext);
    
    const [caption, setCaption] = useState("");
    const [video_url, setVideoURL] = useState("");

    const handleCaption = async (e) => {
        setCaption(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let createdPost = await axios.post(`${API}/users/${currentUser.id}/posts/new`, {
                poster_id: currentUser.id,
                video_url,
                caption
            });
            console.log("createdPostFinish", createdPost);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Caption</label>
                    <input value={caption} placeholder={"caption"} onChange={handleCaption}/>
                    <button type="submit">Post!</button>
                </form>
                <Upload setVideoURL={setVideoURL} video_url={video_url}/>
            </div>
        </>
    )
};

export default PostUpload;