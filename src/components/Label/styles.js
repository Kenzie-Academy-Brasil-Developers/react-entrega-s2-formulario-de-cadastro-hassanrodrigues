import styled from "styled-components";

export const Label = styled.label`
  @media screen and (max-width: 540px) {
    font-family: Inter, Helvetica, Arial;
    font-size: 12px;
    font-weight: 300;
    color: #f8f9fa;
    margin-bottom: 12px;
    margin-top: 5px;
  }

  @media screen and (min-width: 541px) {
    font-family: Inter, Helvetica, Arial;
    color: #f8f9fa;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 12px;
    margin-top: 12px;
  }
`;
