import styled from "styled-components";

export const Button = styled.button`
  @media screen and (max-width: 540px) {
    font-family: Inter, Helvetica, Arial;
    font-size: 12px;
    color: #ffffff;
    width: 264px;
    height: 38px;
    background-color: #ff577f;
    margin-bottom: 16px;
    margin-top: 16px;
    font-weight: 500;
    border-radius: 4px;
    border: 1px solid #ff577f;
    cursor: pointer;
    :hover {
      background-color: #ff427f;
      border: 1.2182px solid #ff427f;
    }
  }

  @media screen and (min-width: 541px) {
    font-family: Inter, Helvetica, Arial;
    color: #ffffff;
    font-size: 16px;
    width: 340px;
    height: 48px;
    background-color: #ff577f;
    margin-bottom: 14px;
    margin-top: 14px;
    font-weight: 500;
    border-radius: 4px;
    border: 1px solid #ff577f;
    cursor: pointer;
    :hover {
      background-color: #ff427f;
      border: 1.2182px solid #ff427f;
    }
  }
`;

export const GrayButton = styled.button`
  @media screen and (max-width: 540px) {
    font-family: Inter, Helvetica, Arial;
    font-size: 12px;
    font-weight: 600;
    color: #f8f9fa;
    width: 80px;
    height: 32px;
    background-color: #212529;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    :hover {
      background-color: #343b41;
      border: 1.2182px solid #343b41;
    }
  }

  @media screen and (min-width: 541px) {
    font-family: Inter, Helvetica, Arial;
    font-size: 12px;
    font-weight: 600;
    width: 68px;
    height: 40px;
    background-color: #212529;
    color: #f8f9fa;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    :hover {
      background-color: #343b41;
      border: 1.2182px solid #343b41;
    }
  }
`;
