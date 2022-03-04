import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 55px;
  > hr {
    margin: 0.6em 0;
    border: 1px solid #49274b;
  }
  @media screen and (max-width: 565px) {
    margin-top: 30px;
  }
`;
export const SidebarHeader = styled.div`
  display: flex;
  padding: 1em;
  border-bottom: 1px solid #49274b;
  > .MuiSvgIcon-root {
    color: #49274b;
    background-color: white;
    border-radius: 999px;
    padding: 0.2em;
    font-size: 1.5rem;
  }
`;
export const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 0.4rem;
    text-transform: uppercase;
  }
  > h3 {
    font-size: 0.825rem;
    display: flex;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 0.9rem;
    margin: 1px 2px 0 0;
    color: green;
  }
`;
