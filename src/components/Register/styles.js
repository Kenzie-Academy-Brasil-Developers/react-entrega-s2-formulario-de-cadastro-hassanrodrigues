import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  min-width: 18.75rem;
  border-radius: 0.2rem;
  width: 100%;
  max-width: 23rem;
  padding: 2.1rem 1.1rem 0;
  color: var(--grey-0);
  background-color: var(--grey-3);

  h3 {
    font-size: 1rem;
    margin-bottom: 1.4rem;
  }

  div {
    text-align: center;
  }

  form {
    width: 100%;
  }

  label {
    display: block;
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    height: 2.4rem;
    border-radius: 0.2rem;
    margin-bottom: 1.3rem;
    padding-left: 0.8rem;
    transition: 0.2s;
    color: var(--grey-0);
    background: var(--grey-2);
    border: 0.0611rem solid var(--grey-2);
  }

  input:focus {
    border: 0.98px solid var(--grey-0);
  }

  select {
    width: 100%;
    height: 2.4rem;
    margin-bottom: 1.3rem;
    padding-left: 0.8rem;
    border-radius: 0.2rem;
    color: var(--grey-1);
    background: var(--grey-2);
    border: 0.06rem solid var(--grey-2);
  }

  select:focus {
    color: var(--grey-0);
    border: 0.98px solid var(--grey-0);
  }

  button {
    display: block;
    width: 100%;
    height: 2.4rem;
    border-radius: 0.25rem;
    margin-bottom: 1.7rem;
    color: var(--grey-0);
    background: var(--color-primary-negative);
    border: 0.08rem solid var(--color-primary-negative);
    transition: 0.2s;
  }

  button:hover {
    background-color: var(--color-primary);
  }

  button:active {
    transform: scale(0.9);
  }

  p {
    font-weight: 600;
    font-size: 0.6rem;
    margin-bottom: 1.1rem;
    color: var(--grey-1);
  }
`;
