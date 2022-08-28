import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  svg {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 8px;
    right: 5px;
    color: var(--negative);
  }
  svg:hover + span {
    opacity: 1;
  }
  .eye {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 8px;
    right: 30px;
    color: var(--grey-1);
    cursor: pointer;
  }
`;
export const Error = styled.div`
  position: relative;
  span {
    font-size: 0.8rem;
    padding: 10px;
    top: 35px;
    left: -90px;
    border-radius: 0.3rem;
    opacity: 0;
    transition: 0.2s;
    z-index: 2;
    position: absolute;
    background-color: var(--negative);
    ::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0 7px;
      -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: rotate(180deg);
      border-color: var(--negative) transparent;
      position: absolute;
      top: -7px;
      right: 8px;
    }
  }
`;
