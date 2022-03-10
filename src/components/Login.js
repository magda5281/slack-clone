import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase.js";
import { signInWithPopup } from "firebase/auth";

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

const LoginContainer = styled.div`
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 6.25em;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: black;
  > img {
    object-fit: contain;
    height: clamp(50px, 12vmin, 100px);
    margin-bottom: 2.5em;
  }
  > button {
    background-color: green;
    margin-top: 3em;
    text-transform: inherit !important;
    color: white;
  }
  > .MuiButton-root:hover {
    background-color: green;
    opacity: 0.7;
  }
`;
