import React from "react";
import { Avatar } from "@mui/material";
import "../src/css/sidebar.css";
import { useSelector } from "react-redux"
import  {selectUser} from"./features/userSlice"

function Sidebar() {
  const user = useSelector(selectUser);
  

  return (
    <div className="sidebar">
      <div className="sidebar-profile">
        <img
          src="https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg"
          alt=""
        />

        <div className="profile-details">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName  }</h4>
          <p>React Developer</p>
        </div>

        <div className="profile-stats">
          <span> who viewed your profile</span>
          <span className="stat-num"> 60</span>
        </div>

        <div className="profile-stats">
          <span>
            {" "}
            Connection
            <br /> <b> who viewed your profile</b>
          </span>
          <span className="stat-num"> 160</span>
        </div>

        
      </div>

      <div className="sidebar-recent">
        <p>Recent</p>
        <p className="hash"><span>#</span>branding</p>
        <p className="hash"><span>#</span>marketing</p>
        <p className="hash"><span>#</span>webdevelopment</p>
        <p className="hash"><span>#</span>programming</p>
        <p className="hash"><span>#</span>reactjs</p>
        <p className="hash"><span>#</span>reduxtoolkit</p>

      </div>
    </div>
  );
}

export default Sidebar;
