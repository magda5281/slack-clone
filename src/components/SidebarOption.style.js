import styled from "styled-components";

export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 1rem;
  }
`;
export const SidebarOptionChannel = styled.h3`
  font-weight: 300;
  padding: 0.625rem;
`;