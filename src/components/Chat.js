import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React from "react";
import { useSelector } from "react-redux";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection, doc, query, orderBy } from "firebase/firestore";
import Message from "./Message";
import {
  ChatContainer,
  ChatMessages,
  Header,
  HeaderLeft,
  HeaderRight,
  ChatBottom,
} from "./Chat.style.js";

function Chat() {
  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));

  const [roomMessages] = useCollection(
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
      <ChatMessages>
        {roomMessages &&
          roomMessages.docs.map((doc) => {
            const { message, timestamp, user, userImage } = doc.data();
            const time = timestamp?.toDate().toUTCString();
            return (
              <Message
                key={doc.id}
                message={message}
                timestamp={time}
                user={user}
                userImage={userImage}
              />
            );
          })}
        <ChatBottom />
      </ChatMessages>

      <ChatInput channelName={roomDetails?.data().name} channelId={roomId} />
    </ChatContainer>
  );
}

export default Chat;
