import styled from "styled-components";

const StyledRegister = styled.main`
  min-height: 100vh;

  padding: 50px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .box_container {
    height: 100%;
    margin-inline: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  .box_topregister {
    display: flex;
    width: 270px;
    justify-content: space-between;

    button {
      height: 30px;
      width: 80px;

      border: none;
      border-radius: var(--base-radius);

      background-color: var(--Grey-3);

      color: var(--Grey-0);
      font: var(--Headline-bold);

      :hover {
        background-color: var(--Grey-2);
      }
    }
  }
  .box_groundcolor {
    padding: 20px 0;

    border-radius: var(--base-radius);

    width: 270px;

    background-color: var(--Grey-3);
  }
  .box_form {
    margin-inline: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    h2 {
      font: var(--Title-14);
      color: var(--Grey-0);
    }

    .box_form--subtitle {
      font: var(--Headline-regular-12);
      color: var(--Grey-1);
    }
  }
  @media (min-width: 720px) {
    .box_topregister,
    .box_groundcolor {
      width: 320px;
    }
  }
`;
export default StyledRegister;
