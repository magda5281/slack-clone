import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.js";
import { ChatInputContainer } from "./ChatInput.style.js";
import { Button } from "@material-ui/core";
function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    addDoc(collection(db, "/rooms", channelId, "messages"), {
      // message: inputRef.current.value,
      message: input,
      timestamp: serverTimestamp(),
      user: "Magda Gozdalik",
      userImage: "https://icon-library.com/images/avatar-icon-png/avatar-icon-png-10.jpg",
    });

    // v8
    // db.collection("/rooms").doc(channelId).collection("/messages").add({
    //   message: inputRef.current.value,
    // });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          // ref={ inputRef }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;
