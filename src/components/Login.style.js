import styled from "styled-components";
export const LoginContainer = styled.div`
  height: 100vh;
  background-color: var(--bg-color-100);
  display: grid;
  place-items: center;
`;
export const LoginInnerContainer = styled.div`
  padding: 6.25em;
  text-align: center;
  background-color: var(--bg-color-0);
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: black;
  > img {
    object-fit: contain;
    height: clamp(50px, 12vmin, 100px);
    margin-bottom: 2.5em;
  }
  > button {
    background-color: var(--bg-color-accent);
    margin-top: 3em;
    text-transform: inherit !important;
    color: white;
  }
  > .MuiButton-root:hover {
    background-color: var(--bg-color-accent);
    opacity: 0.7;
  }
`;
