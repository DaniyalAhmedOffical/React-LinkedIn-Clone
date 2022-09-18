import { autocompleteClasses, Avatar } from "@mui/material";
import React from "react";
import "../src/css/header.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import {auth}  from "./firebase";

function Headeroptions({ Icon, title, avatar }) {
  const user = useSelector(selectUser);
  return (
    <div className="header-options">
      {Icon && <Icon></Icon>}

      {avatar && (
        <Avatar
          name={avatar}
          src={user.photoURL}
          onClick={() => auth.signOut()}
        />
      )}
      <span>{title}</span>
    </div>
  );
}

export default Headeroptions;
