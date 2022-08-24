import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  .modal_container {
    width: 100%;
    min-width: 18.7rem;
    max-width: 23.1rem;
    overflow: hidden;
    position: relative;
    opacity: 1;
    border-radius: 0.25rem;
    animation: showUp 0.3s;
  }

  @keyframes showUp {
    from {
      opacity: 0;
      transform: scale(0.6);
    }
  }

  .modal_container div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-2);
    padding: 0.75rem 1.25rem;
    border-radius: 0.1rem 0.1rem 0 0;
  }

  .modal_container div h3 {
    color: var(--grey-0);
    font-weight: 700;
    font-size: 0.9rem;
  }

  .modal_container div button {
    background: none;
    border: none;
  }

  .modal_container div button svg {
    width: 1.25rem;
    height: 1.25rem;
    color: var(--grey-1);
  }
  .modal_container div button svg:hover {
    color: var(--grey-0);
  }
`;
