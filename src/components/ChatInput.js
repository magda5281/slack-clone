import { Button } from "@material-ui/core";
import { collection, addDoc, doc, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase.js";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }
    // const collectionRef = collection(db, `rooms/${channelId}/messages`);
    // const payload = {
    //   message: input,
    //   timestamp: serverTimestamp(),
    //   user: "Magda Gozdalik",
    //   userImage: "https://icon-library.com/images/avatar-icon-png/avatar-icon-png-10.jpg",
    // };
    // addDoc(collectionRef, payload);
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

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 2.5em;
    width: 60vw;
    min-width: 40vmin;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 1.3em;
    outline: none;
  }
  form > button {
    display: none !important;
  }
`;
