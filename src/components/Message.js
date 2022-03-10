import React from "react";
import styled from "styled-components";
import { MessageContainer, MessageInfo } from "./Message.style.js";

function Message({ message, timestamp, user, userImage }) {
  console.log(userImage);
  return (
    <MessageContainer>
      <img src={userImage} alt="user image" />
      <MessageInfo>
        <h4>
          {user}
          <span> {timestamp}</span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;
