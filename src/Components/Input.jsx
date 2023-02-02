import React from "react";
import SendIcon from "@mui/icons-material/Send";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PublishIcon from "@mui/icons-material/Publish";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="enter a chat" />
      <div className="chat-icons">
        <input type="file" id="addPhoto" style={{ display: "none" }} />
        <label htmlFor="addPhoto">
          <AddPhotoAlternateIcon fontSize="medium" />
        </label>
        <PublishIcon fontSize="medium" />
        <SendIcon fontSize="medium" />
      </div>
    </div>
  );
};

export default Input;
