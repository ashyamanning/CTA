import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiURL } from "../../util/apiURL";
import { redirect } from "../../util/firebaseFunctions";
import { signUp } from "../../util/firebaseFunctions";
import { storage } from "../../firebase";
import axios from "axios";

const SignUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const [profilePicUrl, setProfilePicUrl] = useState("");
    const [imageAsFile, setImageAsFile] = useState("");

    const [toggleUploadMsg, setToggleUploadMsg] = useState(false);

    const history = useHistory();
    const API = apiURL();

    const handleImageAsFile = (e) => {
        const image = e.target.files[0];
        const types = ["image/png", "image/jpeg", "image/gif", "image/jpg"];
        if (types.every((type) => image.type !== type)) {
          alert(`${image.type} is not a supported format`);
        } else {
          setImageAsFile((imageFile) => image);
        }
    }; 

    const handleFirebaseUpload = () => {
        if (imageAsFile === "") {
          alert("Please choose a valid file before uploading");
        } else if (imageAsFile !== null) {
          const uploadTask = storage
            .ref(`/images/${imageAsFile.name}`)
            .put(imageAsFile);
          uploadTask.on(
            "state_changed",
            (snapShot) => {
              console.log(snapShot);
            },
            (err) => {
              console.log(err);
            },
            () => {
              storage
                .ref("images")
                .child(imageAsFile.name)
                .getDownloadURL()
                .then((fireBaseUrl) => {
                  setProfilePicUrl(fireBaseUrl);
                });
            }
          );
          setToggleUploadMsg(true);
        } else {
          setToggleUploadMsg(false);
        }
    };

    const handleRedirect = () => {
        redirect();
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await signUp(email, password);
            debugger;
            let signIn = await axios.post(`${API}/api/users`, {
                id: res.user.uid,
                firstName,
                lastName,
                userName,
                bio,
                profile_pic_url: profilePicUrl
            });
            history.push("/");
            
        } catch (err) {
            
        }
        
    }
    return (
        <>
            <h1>Sign up for TikTok</h1>
            <p>Create a profile, follow other accounts, make your own videos, and more.</p>
            <form onSubmit={handleRedirect}>
                <div>
                    <input type="text" value={firstName} name="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                    <input type="text" value={lastName} name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                    <input type="text" value={userName} name="userName" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
                    <input type="email" value={email} name="Email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" value={password} name="Password" placeholder="Password" autoComplete="on" onChange={(e) => setPassword(e.target.value)}/>
                    <input type="text" value={bio} name="Bio" placeholder="Bio" onChange={(e) => setBio(e.target.value)}/>
                    <input type="file" value={profilePicUrl} name="profilePicUrl" onChange={handleImageAsFile} required/>
                    <button type="button" onClick={() => handleFirebaseUpload()}>Upload</button>
                    {toggleUploadMsg ? 
                    <h5>Upload successful!</h5> : 
                    null}
                    <button type="submit" onClick={handleSubmit}>Login</button>
                </div>
                <button type="submit">Signup with Github</button>
            </form>

        </>
    )
};

export default SignUp;