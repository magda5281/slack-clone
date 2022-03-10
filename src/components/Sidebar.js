import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./Siderbar.style.js";

import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../firebase.js";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleIcon from "@mui/icons-material/People";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption.js";

function Sidebar() {
  const [channels, loading, error] = useCollection(collection(db, "rooms"));
  const [user] = useAuthState(auth);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>{user?.displayName}</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items " />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser " />
      <SidebarOption Icon={PeopleIcon} title="People & user groups " />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File browser " />
      <SidebarOption Icon={ExpandLessIcon} title="Show less " />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Show more " />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel " />
      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
