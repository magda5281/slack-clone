import React from "react";
import Spinner from "react-spinkit";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";

function App() {
  //pass the authentication object into useAuthstate from firebase
  //when you sign in on login page that hook takes auth from firebase and logs you in as a user
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https://img.icons8.com/color/144/000000/slack-new.png" alt="slack logo" />
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" exact element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  /* text-align: center; */
  /* padding-bottom: 6em; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    object-fit: contain;
    height: clamp(50px, 12vmin, 100px);
    margin-bottom: 3em;
  }
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
