import styled from "styled-components";
export const ChatMessages = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2em;
  border-bottom: 1px solid var(--color-accent-100);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 1em;
  }
  > .MuiSvgIcon-root {
    color: var(--slack-color) !important;
    font-size: 1.2rem;
  }
`;
export const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
  }

  > p > .MuiSvgIcon-root {
    color: var(--slack-color) !important;
    font-size: 1rem;
    margin-right: 0.5em;
  }
`;

export const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  color: var(--slack-color);
  margin-top: 4em;
`;

export const ChatBottom = styled.div`
  padding-bottom: 8em;
`;
