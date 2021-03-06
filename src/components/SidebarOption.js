import React from "react";
import { useDispatch } from "react-redux";
import { SidebarOptionContainer, SidebarOptionChannel } from "./SidebarOption.style.js";
import { db } from "../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { enterRoom } from "../features/appSlice.js";

function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
  const addChannel = () => {
    const channelName = prompt("Enter the channel name");
    if (channelName) {
      addDoc(collection(db, "rooms"), {
        name: channelName,
      }).catch(function (error) {
        console.error("Error writing Value: ", error);
      });
    }
  };
  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
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
