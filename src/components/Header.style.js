import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--slack-color);
  padding: 0.6em 1.2em;
`;
export const HeaderSearch = styled.div`
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  flex: 0.4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: grey;
  border: 1px solid grey;
  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: white;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  padding: 0 1em 0 0;
  justify-content: space-between;
  > svg:nth-child(3) {
    margin-left: clamp(15px, 50vmin, 200px);
  }
  > svg:nth-child(2) {
    cursor: pointer;
    :hover {
      opacity: 0.8;
      background-color: #340e36;
    }
  }
`;

export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  margin-right: 0.625em;
  transition: opacity ease-in-out 0.3s;

  :hover {
    opacity: 0.8;
  }
`;

export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 0.625em;
`;
