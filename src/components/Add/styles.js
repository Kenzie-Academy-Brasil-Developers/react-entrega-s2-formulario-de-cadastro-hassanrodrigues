import styled from "styled-components";

export const Form = styled.form`
  background-color: var(--grey-3);
  padding: 0.75rem 1.25rem;

  label {
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    color: var(--grey-0);
    display: block;
  }

  input {
    width: 100%;
    height: 38.5px;
    border-radius: 3.2px;
    margin-bottom: 1.3rem;
    padding-left: 0.8rem;
    color: var(--grey-0);
    background: var(--grey-2);
    border: 0.06rem solid var(--grey-2);
    transition: 0.2s;
  }
  input:focus {
    border: 0.9px solid var(--grey-0);
  }

  select {
    width: 100%;
    height: 2.4rem;
    margin-bottom: 1.3rem;
    padding-left: 0.8rem;
    color: var(--grey-1);
    background: var(--grey-2);
    border: 0.06rem solid var(--grey-2);
    border-radius: 0.2rem;
  }

  select:focus {
    color: var(--grey-0);
    border: 0.9px solid var(--grey-0);
  }

  button {
    display: block;
    width: 100%;
    height: 2.4rem;
    color: var(--grey-0);
    background: var(--color-primary);
    border: 1.2px solid var(--color-primary);
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    transition: 0.2s;
  }

  button:hover {
    background-color: var(--color-primary-focus);
  }

  button:active {
    transform: scale(0.9);
  }

  span {
    color: var(--grey-0);
  }
`;
