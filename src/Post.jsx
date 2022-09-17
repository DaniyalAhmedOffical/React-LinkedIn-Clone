import React from "react";
import "../src/css/post.css";
import { Avatar } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import MoreVertIcon from "@mui/icons-material/MoreVert";
function Post({name, description, message,photoURL}) {
  return (
    <div className="posts">
      <div className="post-header">
        <div className="post-headerLeft">
          <Avatar src={photoURL} />
          <div className="post-profile-details">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
        <MoreVertIcon />
      </div>
      <div className="post-body">
       <p>{message}</p>
      </div>
      <div className="post-footer">
          <div className="post-footerOptions">
            <ThumbUpAltIcon/>
            <span>Like</span>
          </div>

          <div className="post-footerOptions">
            <CommentIcon/>
            <span>Comment</span>
          </div>

          <div className="post-footerOptions">
            <ShareIcon/>
            <span>Share</span>
          </div>

          <div className="post-footerOptions">
            <SendIcon/>
            <span>Send</span>
          </div>
      </div>
    </div>
  );
}

export default Post;
