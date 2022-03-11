import styled from "styled-components";

export const ChatInputContainer = styled.div`
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 2.5em;
    width: 60vw;
    min-width: 0;
    border: 1px solid var(--color-accent-200);
    border-radius: 3px;
    font-size: 0.625rem;
    padding: 1em;
    outline: none;
  }
  form > button {
    display: none !important;
  }
`;
