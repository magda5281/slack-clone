import styled from "styled-components";
export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25em;
  > img {
    max-width: 100%;
    display: block;
    height: clamp(20px, 5vmin, 50px);
    border-radius: 10px;
  }
`;
export const MessageInfo = styled.div`
  padding-left: 0.625em;
  > h4 > span {
    color: gray;
    font-weight: 300;
    font-size: 0.625rem;
    padding-left: 0.3em;
  }
`;
