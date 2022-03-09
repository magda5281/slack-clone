import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useCollectionData, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, doc, query, orderBy } from "firebase/firestore";

function Chat() {
  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));
  const [roomMessages] = useCollectionData(
    roomId && query(collection(db, "rooms", roomId, "messages")),
    orderBy("timestamp", "asc")
  );

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong># {roomDetails?.data().name} </strong>
          </h4>
          <StarBorderOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages>{/* dispaly/list messages  */}</ChatMessages>
      <ChatInput channelName={roomDetails?.data().name} channelId={roomId} />
    </ChatContainer>
  );
}

export default Chat;

const ChatMessages = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2em;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 1em;
  }
  > .MuiSvgIcon-root {
    color: var(--slack-color) !important;
    font-size: 1.2rem;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
  }

  > p > .MuiSvgIcon-root {
    color: var(--slack-color) !important;
    font-size: 1rem;
    margin-right: 0.5em;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  color: var(--slack-color);
  margin-top: 4em;
`;
