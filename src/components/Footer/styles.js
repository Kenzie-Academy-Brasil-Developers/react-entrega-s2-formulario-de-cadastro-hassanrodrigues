import styled from "styled-components";

export const Footer = styled.footer`
  @media screen and (max-width: 540px) {
    display: none;
  }

  @media screen and (min-width: 541px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    font-family: Inter, Helvetica, Arial;
    color: #f8f9fa;
    height: 160px;
    font-size: 16px;
    max-width: 95vw;
    font-weight: 700;
  }
`;
