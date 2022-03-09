import styled from "styled-components";

export const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 2.5em;
    width: 60vw;
    min-width: 40vmin;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 1.3em;
    outline: none;
  }
  form > button {
    display: none !important;
  }
`;
