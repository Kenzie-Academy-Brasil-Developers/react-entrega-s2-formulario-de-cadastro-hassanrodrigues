import styled from "styled-components";

export const Form = styled.form`
  background-color: var(--grey-3);
  padding: 0.75rem 1.25rem;
  label {
    display: block;
    font-size: 0.7rem;
    margin-bottom: 0.5rem;
    color: var(--grey-0);
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
    cursor: not-allowed;
  }
  input:focus {
    border: 0.9px solid var(--grey-0);
  }

  select {
    width: 100%;
    height: 2.4rem;
    margin-bottom: 1.3rem;
    padding-left: 0.8rem;
    border-radius: 0.2rem;
    color: var(--grey-1);
    background: var(--grey-2);
    border: 0.0611rem solid var(--grey-2);
  }

  select:focus {
    color: var(--grey-0);
    border: 0.9px solid var(--grey-0);
  }

  .buttons {
    display: flex;
    gap: 1.3rem;
  }

  .buttons button[type="submit"] {
    width: 70%;
    height: 2.4rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    color: var(--grey-0);
    background: var(--color-primary-negative);
    border: 1.2px solid var(--color-primary-negative);
    transition: 0.2s;
  }

  .buttons button[type="submit"]:hover {
    background-color: var(--color-primary-focus);
  }

  .buttons button[type="submit"]active {
    transform: scale(0.9);
  }

  .buttons button + p {
    height: 2.4rem;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    padding-top: 0.4rem;
    width: 35%;
    text-align: center;
    color: var(--grey-0);
    background: var(--grey-2);
    border: 1.2px solid var(--grey-2);
    transition: 0.2s;
    cursor: pointer;
  }

  .buttons button + p:hover {
    background: var(--negative);
    border: 1.2px solid var(--negative);
  }
`;
