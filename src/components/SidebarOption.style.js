import styled from "styled-components";

export const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
    background-color: var(--bg-color-slack-hover);
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 1em;
  }
`;
export const SidebarOptionChannel = styled.h3`
  font-weight: 300;
  padding: 0.625em;
`;
