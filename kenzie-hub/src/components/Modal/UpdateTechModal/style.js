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
    border-radius: var(--base-radius);

    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 275px;
    width: 290px;

    background-color: var(--Grey-3);

    .modal_creat--header {
      border-radius: 4px 4px 0 0;

      width: 100%;
      height: 40px;

      padding-inline: 10px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: var(--Grey-2);

      h2 {
        color: var(--Grey-0);
        font: var(--Title-12);
      }
      span {
        display: flex;

        cursor: pointer;

        color: var(--Grey-1);
        font: var(--Headline-regular-16);
      }
    }

    .modal_create--section {
      width: 100%;

      padding: 20px 10px;

      .modal_create--form {
        display: flex;
        flex-direction: column;
        gap: 15px;

        div {
          display: flex;
          flex-direction: column;
          gap: 18px;

          position: relative;

          .arrow_down {
            position: absolute;
            top: 43px;
            right: 7px;
            color: grey;
          }

          label {
            color: var(--Grey-0);
            font: var(--Headline-regular-12);
          }

          input,
          select {
            border: none;
            border-radius: var(--base-radius);
            padding-inline: 10px;

            height: 40px;

            background-color: var(--Grey-2);
          }

          input {
            font: var(--Headline-regular-12);
            color: var(--Grey-0);
            ::placeholder {
              color: var(--Grey-1);
            }
          }

          p {
            font: var(--Headline-italic);
            color: var(--Negative);
          }

          select {
            color: var(--Grey-1);
            font: var(--Headline-regular-12);

            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
          }
        }

        .box_btns {
          flex-direction: row;

          button {
            height: 40px;

            border: none;
            background-color: var(--Color-primary);

            color: var(--Grey-0);
            font: var(--Headline-regular-12);

            :hover {
              background-color: var(--Color-primary-Focus);
            }
          }
          .save_updates {
            min-width: 160px;
          }

          .erase {
            background-color: var(--Grey-1);
            min-width: 91px;

            :hover {
              background-color: var(--Grey-2);
            }
          }
        }
      }
    }
  }

  @media (min-width: 600px) {
    .modal_container {
      min-height: 309px;
      width: 370px;
    }

    #save_btn {
      min-width: 200px;
    }

    #erase_btn {
      min-width: 131px;
    }
  }
`;
export default StyledModal;
