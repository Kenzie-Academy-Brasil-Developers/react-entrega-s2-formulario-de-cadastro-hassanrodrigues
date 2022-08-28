import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid var(--grey-3);
  border-bottom: 1px solid var(--grey-3);

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 18.7rem;
    width: 100%;
    max-width: 90%;
    margin: 2.1rem 0.7rem;
  }

  @media screen and (min-width: 768px) {
    div {
      max-width: 55%;
    }
  }
  h3 {
    color: var(--grey-0);
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 18px;
  }
  p {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 14px;
  }
`;
