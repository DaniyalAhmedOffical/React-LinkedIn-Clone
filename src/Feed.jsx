import React, { useState, useEffect } from "react";
import "../src/css/feed.css";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Post from "./Post";
import firebase from "firebase";
import { db } from "./firebase";
import { useSelector } from "react-redux"
import  {selectUser} from"./features/userSlice"
import FlipMove from "react-flip-move"
function Feed() {
  const user = useSelector(selectUser)
  const [input, setInput] = useState();
  const [posts, setPost] = useState([]);
  const submitPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: "I am React Developer",
      message: input,
      photoURL: user.photoURL,
        // "https://media-exp1.licdn.com/dms/image/C4D03AQH-7jhK8L_URQ/profile-displayphoto-shrink_800_800/0/1656947018555?e=1668643200&v=beta&t=f1n0JkjTQY0VzQUy0L9kLCHP5Q_HcimnTMhC6D1VxUc",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot(snapshot => {
        setPost(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, [])

  return (
    <div className="feed">
      <div className="feed-input">
        <div className="feed-form">
          <Avatar src={user.photoURL } />
          <form onSubmit={submitPost}>
            <input
              type="text"
              placeholder="Start a Post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>

        <div className="feed-options">
          <div className="option">
            <InsertPhotoIcon style={{ color: "#70b5f9" }} />
            <span>Photo</span>
          </div>

          <div className="option">
            <YouTubeIcon style={{ color: "#7fc15e" }} />
            <span>Video</span>
          </div>
          <div className="option">
            <TodayIcon style={{ color: "#e7a33e" }} />
            <span>Event</span>
          </div>
          <div className="option">
            <AssignmentIcon style={{ color: "#fc9295" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>

<FlipMove>
  
{
    posts.map(({id, data:{name, description, message, photoURL}})=>{
        return <Post
        key={id}
        name={name}
        description={description}
        message={message}
        photoURL={photoURL}
        />
    })
}      

</FlipMove>
    </div>
  )
}

export default Feed;
