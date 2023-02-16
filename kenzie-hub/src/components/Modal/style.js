import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 100%;

  background-color: rgba(18, 18, 20, 0.5);

  .modal_container {
    display: flex;
    align-items: center;
    justify-content: center;

    min-height: 275px;
    width: 290px;

    padding-inline: 10px;

    background-color: var(--Grey-3);
  }

  /* @media (min-width: 600px) {
    .modal_container {
      right: 106px;

      min-height: 340px;
      width: 370px;
    }
  }

  @media (min-width: 1000px) {
    .modal_container {
      right: 302px;
    }
  }

  @media (min-width: 1170px) {
    .modal_container {
      right: 483px;
    }
  } */
`;
export default StyledModal;
