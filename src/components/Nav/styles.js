import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 18.7rem;
    width: 100%;
    max-width: 90%;
    margin: 1.1rem 0.7rem;
  }

  @media screen and (min-width: 768px) {
    div {
      max-width: 55%;
    }
  }

  button {
    height: 2.5rem;
    padding: 0px 16.3px;
    color: var(--grey-0);
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 4px;
    transition: 0.2s;
  }

  button:hover {
    background-color: var(--grey-2);
  }

  button:active {
    transform: scale(0.9);
  }
`;

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 18.7rem;
    width: 100%;
    max-width: 23.1rem;
    margin: 0.75rem;
  }

  button {
    height: 2.5rem;
    padding: 0px 16.2px;
    color: var(--grey-0);
    background-color: var(--grey-3);
    border: 1px solid var(--grey-3);
    border-radius: 4px;
    transition: 0.2s;
  }

  button:hover {
    background-color: var(--grey-2);
  }

  button:active {
    transform: scale(0.98);
  }
`;
