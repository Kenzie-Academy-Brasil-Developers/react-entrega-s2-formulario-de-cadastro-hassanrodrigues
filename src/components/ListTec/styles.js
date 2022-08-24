import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  border-radius: 0.2rem;
  min-width: 18.7rem;
  gap: 1rem;
  max-width: 90%;
  width: 100%;
  margin: 0 0.7rem 2.1rem;
  padding: 1.37rem 8.5px;
  background-color: var(--grey-3);
  @media screen and (min-width: 768px) {
    max-width: 55%;
  }
`;
