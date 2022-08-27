import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;

  svg {
    width: 2 0px;
    height: 20px;
    top: 8px;
    right: 5px;
    color: var(--negative);
    position: absolute;
  }

  svg:hover + span {
    opacity: 1;
  }

  .eye {
    width: 20px;
    height: 20px;
    top: 8px;
    right: 30px;
    color: var(--grey-1);
    position: absolute;
    cursor: pointer;
  }
`;
export const Error = styled.div`
  position: absolute;

  span {
    font-size: 0.8rem;
    padding: 10px;
    top: 35px;
    background-color: var(--negative);
    left: -90px;
    border-radius: 0.3rem;
    opacity: 0;
    position: absolute;
    transition: 0.2s;
    z-index: 1;

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
