import styled from "styled-components";

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 18.7rem;
  width: 100%;
  max-width: 90%;
  margin: 1.25rem 0;
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
  h2 {
    color: var(--grey-0);
  }
  button {
    text-align: center;
    border-radius: 0.2rem;
    width: 2rem;
    height: 2rem;
    font-size: 25px;
    color: var(--grey-0);
    background-color: var(--grey-3);
    border: none;
    cursor: pointer;
  }
  svg {
    width: 0.8rem;
  }
  button:hover {
    background-color: var(--grey-2);
  }
`;
