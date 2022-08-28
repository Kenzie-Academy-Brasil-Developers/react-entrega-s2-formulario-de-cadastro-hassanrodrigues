import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  min-width: 18rem;
  width: 100%;
  max-width: 23.1rem;
  padding: 33.6px 1.2rem;
  border-radius: 0.2rem;
  color: var(--grey-0);
  background-color: var(--grey-3);

  h3 {
    font-size: 1rem;
    margin-bottom: 1.4rem;
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
    height: 38.5px;
    border-radius: 3.2px;
    margin-bottom: 1.3em;
    padding-left: 0.8rem;
    color: var(--grey-0);
    background: var(--grey-2);
    border: 0.9772px solid var(--grey-1);
    transition: 0.2s;
  }

  input:focus {
    border: 0.9772px solid var(--grey-0);
  }

  button {
    display: block;
    width: 100%;
    height: 2.4rem;
    border-radius: 0.25rem;
    color: var(--grey-0);
    margin-bottom: 1.7rem;
    background: var(--color-primary);
    border: 1.2px solid var(--color-primary);
    transition: 0.2s;
  }

  button:hover {
    background-color: var(--color-primary-focus);
  }

  button:active {
    transform: scale(0.9);
  }

  p {
    color: var(--grey-1);
    font-weight: 600;
    font-size: 0.6rem;
    margin-bottom: 1.1rem;
  }

  a {
    text-align: center;
    width: 100%;
    font-weight: 500;
    height: 2.4rem;
    padding-top: 0.6rem;
    font-size: 0.8rem;
    border-radius: 0.2rem;
    text-decoration: none;
    color: var(--grey-0);
    background-color: var(--grey-1);
    background: var(--grey-1);
    border: 0.1rem solid var(--grey-1);
    transition: 0.2s;
  }

  a:hover {
    background-color: var(--grey-2);
  }

  a:active {
    transform: scale(0.9);
  }
`;
