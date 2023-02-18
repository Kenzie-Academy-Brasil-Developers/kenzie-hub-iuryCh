import styled from "styled-components";

const StyledMain = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  nav {
    height: 70px;
    width: 100%;

    position: fixed;
    top: 0;

    background-color: var(--Grey-4);

    padding-inline: 10px;

    border-bottom: 1px solid var(--Grey-3);

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      height: 30px;
      width: 50px;

      border: none;
      background-color: var(--Grey-3);

      color: white;

      font: var(--Headline-regular-12);
    }
  }
  .main_container {
    min-height: 100vh;
    min-width: 100%;

    padding: 20px 10px;

    .main_container--header {
      height: 100%;

      display: flex;
      justify-content: space-between;

      gap: 10px;

      h2 {
        color: var(--Grey-0);
        font: var(--Title-16);
      }

      p {
        color: var(--Grey-0);
        font: var(--Headline-regular-16);
      }

      button {
        background-color: var(--Grey-1);
        border-radius: var(--base-radius);
        height: 25px;
        border: none;
      }
    }

    .main_container--body {
      width: 100%;

      padding: 20px 0px;

      .box_list {
        display: flex;
        flex-direction: column;
        gap: 15px;

        height: auto;

        padding: 12px;

        background-color: var(--Grey-3);

        li{
          cursor: pointer;
          :hover{
            background-color: var(--Grey-2);
          }
        }

        .empty_techs{
          color: var(--Grey-1);
        }
      }
      .box-list--card {
        min-height: 50px;

        padding: 12px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: var(--Grey-4);

        border-radius: var(--base-radius);

        p {
          color: var(--Grey-0);
          font: var(--Title-14);
        }

        span {
          color: var(--Grey-1);
          font: var(--Headline-regular-12);
        }
      }
    }
  }
  @media (min-width: 600px) {
    nav {
      padding-inline: 100px;
    }

    .main_container {
      padding-inline: 100px;
    }
  }

  @media (min-width: 1000px) {
    nav {
      padding-inline: 200px;
    }

    .main_container {
      padding-inline: 200px;
    }
  }
  @media (min-width: 1170px) {
    nav {
      padding-inline: 250px;
    }

    .main_container {
      padding-inline: 250px;
    }
  }
`;
export default StyledMain;
