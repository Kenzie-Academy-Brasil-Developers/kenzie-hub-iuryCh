import styled from "styled-components";

const StyledLogin = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    
    height: 40px;
    width: 100%;

    border: none;

    background-color: var(--Grey-1);
    font: var(--Headline-regular);

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--Grey-0);

    :hover {
      background-color: var(--Grey-2);
    }
    /* } */
  }

  .box-form {
    margin: 0 12px;

    height: 420px;
    width: 300px;

    background-color: var(--Grey-3);

    display: flex;
    align-items: center;

    .form {
      height: 90%;
      width: 90%;

      margin: 30px 18px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 25px;

      h2 {
        font: var(--Title-16);
        color: var(--Grey-0);
      }

      .footer_msg {
        font: var(--Headline-italic);
        color: var(--Grey-1);
      }
    }
  }
  @media (min-width: 720px) {
    .box-form {
      width: 370px;
    }
  }
`;
export default StyledLogin;
