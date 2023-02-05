import React, { useContext, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import PublishIcon from "@mui/icons-material/Publish";
import { AuthContext } from "../Context/AuthContext";
import { ChatContext } from "../Context/ChatContext";
import {
  arrayUnion,
  doc,
  Timestamp,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../firebase.config";
import { v4 as uuid } from "uuid";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="enter a chat"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="chat-icons">
        <input
          type="file"
          id="addPhoto"
          style={{ display: "none" }}
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="addPhoto">
          <AddPhotoAlternateIcon fontSize="medium" />
        </label>
        <PublishIcon fontSize="medium" />
        <SendIcon fontSize="medium" onClick={handleSend} />
      </div>
    </div>
  );
};

export default Input;
