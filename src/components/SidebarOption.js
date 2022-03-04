import React from "react";
import styled from "styled-components";

function SidebarOption({ Icon, title, addChannelOption }) {
  return (
    <SidebarOptionContainer>
      {Icon && <Icon style={{ margin: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
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
const SidebarOptionChannel = styled.div``;
