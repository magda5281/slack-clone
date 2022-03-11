import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  background-color: var(--slack-color);
  padding: 0.6em 1.2em;
`;
export const HeaderSearch = styled.div`
  opacity: 1;
  border-radius: 6px;
  background-color: var(--bg-color-slack-secondary);
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--color-accent-200);
  border: 1px solid var(--color-accent-200);
  flex: 0.5;
  @media screen and (max-width: 315px) {
    flex: 0.8;
  }

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    outline: none;
    color: white;
    flex: 1;

    @media screen and (max-width: 315px) {
      width: 10vmin;
    }
  }
  > ::placeholder {
    font-size: 0.625rem;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;

  > svg:nth-child(2) {
    margin-right: 0.5em;
  }
`;
export const HeaderLeftLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  > .MuiSvgIcon-root {
    margin-right: 1em;
    cursor: pointer;
    :hover {
      opacity: 0.8;
      background-color: var(--bg-color-slack-hover);
    }
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-right: 1em;
  transition: opacity ease-in-out 0.3s;

  :hover {
    opacity: 0.8;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 0.625em;
  flex: 0.2;
`;
