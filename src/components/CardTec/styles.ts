import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  border-radius: 0.2rem;
  background-color: var(--grey-4);
  transition: 0.2s;
  z-index: 1;
  cursor: pointer;

  :hover {
    background-color: var(--grey-2);
  }

  h3 {
    font-size: 14px;
    font-weight: 700;
    color: var(--grey-0);
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-1);
  }
`;
