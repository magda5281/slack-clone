import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import React, { useEffect, useRef } from "react";
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
  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(roomId && doc(db, "rooms", roomId));
  const [roomMessages, loading] = useCollection(
    roomId && query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp", "asc"))
  );

  //useEffect runs when component mounts and messages are loaded, and runs on evry roomId change
  useEffect(() => {
    chatRef?.current?.scrollIntoView({ behaviour: "smooth" });
  }, [roomId, loading]);

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          {" "}
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
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput channelName={roomDetails?.data().name} channelId={roomId} chatRef={chatRef} />
        </>
      )}
    </ChatContainer>
  );
}

export default Chat;
