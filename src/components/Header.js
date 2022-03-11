import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.js";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderSearch,
  HeaderRight,
  HeaderAvatar,
  HeaderLeftLeft,
} from "./Header.style.js";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";

function Header() {
  const [user] = useAuthState(auth);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderLeftLeft>
          <HeaderAvatar
            src={user?.photoURL}
            alt={user?.displayName}
            // referrerPolicy="no-referrer" //to prevent img error with the google sign in ??? as sometimes img loads and sometimes it doesn't
          />
          <LogoutIcon onClick={() => signOut(auth)} />
        </HeaderLeftLeft>

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
