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

    const messageRef = addDoc(collection(db, "/rooms", channelId, "messages"), {
      message: input,
      timestamp: serverTimestamp(),
      user: "Magda Gozdalik",
      userImage:
        "https://images.unsplash.com/photo-1646673940197-dbf528eea559?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    });
    console.log(messageRef);
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
