import React from "react";
import styled from "styled-components";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";

import { useCollection } from "react-firebase-hooks/firestore";

function SidebarOption({ Icon, title, addChannelOption }) {
  const [channels, loading, error] = useCollection(collection(db, "/rooms"));
  console.log(channels);

  const addChannel = () => {
    const channelName = prompt("Enter the channel name");
    if (channelName) {
      // db.collection("/rooms")
      //   .add({
      //     name: channelName,
      //   })
      addDoc(collection(db, "rooms"), {
        name: channelName,
      })
        .then(function () {
          console.log("Value successfully written!");
        })
        .catch(function (error) {
          console.error("Error writing Value: ", error);
        });
    }
  };
  const selectChannel = () => {};
  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon style={{ margin: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 1rem;
  }
`;
const SidebarOptionChannel = styled.div``;
