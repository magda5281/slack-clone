import React from "react";
import styled from "styled-components";

function Message({ message, timestamp, user, userImage }) {
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

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25em;
  > img {
    max-width: 100%;
    display: block;
    height: clamp(20px, 5vmin, 50px);
    border-radius: 10px;
  }
`;
const MessageInfo = styled.div`
  padding-left: 0.625em;
  > h4 > span {
    color: gray;
    font-weight: 300;
    font-size: 0.625rem;
    padding-left: 0.3em;
  }
`;
