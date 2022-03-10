import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatInputContainer } from "./ChatInput.style.js";
import { Button } from "@material-ui/core";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    chatRef.current.scrollIntoView({ behaviour: "smooth" });
    const messageRef = addDoc(collection(db, "/rooms", channelId, "messages"), {
      message: input,
      timestamp: serverTimestamp(),
      user: user?.displayName,
      userImage: user.photoURL,
    });

    chatRef?.current.scrollIntoView({ behaviour: "smooth" });
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
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
