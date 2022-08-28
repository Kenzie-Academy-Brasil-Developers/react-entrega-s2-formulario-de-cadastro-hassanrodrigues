import styled from "styled-components";

export const Load = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  svg {
    height: 100px;
    width: 100px;
    color: var(--grey-2);
    animation: spin 0.6s infinite;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
