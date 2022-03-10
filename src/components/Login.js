import { Button } from "@material-ui/core";
import React from "react";

import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";
import { LoginContainer, LoginInnerContainer } from "./Login.style.js";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).catch((error) => {
      alert(error.message);
    });
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src="https://img.icons8.com/color/144/000000/slack-new.png" />
        <h1>Sign in and CHAT WITH MAGDA</h1>
        <p>magda.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;
