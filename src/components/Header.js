import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.js";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderSearch,
  HeaderRight,
  HeaderAvatar,
} from "./Header.style.js";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { signOut } from "firebase/auth";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar src={user?.photoURL} alt={user?.displayName} onClick={() => auth.signOut()} />
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search SLack" type="text" />
      </HeaderSearch>
      <HeaderRight>
        <HelpOutlineOutlinedIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
