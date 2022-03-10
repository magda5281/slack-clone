import styled from "styled-components";

export const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

export const AppLoadingContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    object-fit: contain;
    height: clamp(50px, 12vmin, 100px);
    margin-bottom: 3em;
  }
`;

export const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
