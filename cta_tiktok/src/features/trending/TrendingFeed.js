import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { apiURL } from "../../util/apiURL";
import { AuthContext } from "../../providers/AuthContext";

const TrendingFeed = () => {
    const [posts, setPosts] = useState([]);

    const API = apiURL();
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchAllUsersPosts = async () => {
            let res = await axios.get(`${API}/posts`);
            let usersPosts = res.data.payload;
            console.log("res", usersPosts);
            setPosts(usersPosts);
            // let { poster_id, video_url, caption, created_at_timestamp } = usersPosts;
            // console.log("id", poster_id);
            debugger;
        };
        fetchAllUsersPosts();
    }, []);


    return (
        <>
            <h1>Trending Feed</h1>
            <div>
                {posts.map((post) => {
                    return (
                        <div>
                            <h1>{post.display_name}</h1>
                            <h3>@{post.username}</h3>
                            <div>{new Date(post.created_at_timestamp).toLocaleDateString()}</div>
                            <video controls width="420" height="840">
                                <source src={post.video_url} type="video/mp4"/>
                                <source src={post.video_url} type="video/mov"/>
                                <source src={post.video_url} type="video/ogg"/>
                                <source src={post.video_url} type="video/quicktime"/>
                                Your browser does not support the HTML video.
                            </video>
                            <div>{post.caption}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
};

export default TrendingFeed;