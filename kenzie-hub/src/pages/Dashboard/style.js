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

    border-bottom: 1px solid var(--Grey-3);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 10px;
    button {
      height: 30px;
      width: 50px;

      border: none;
      background-color: var(--Grey-3);

      color: white;
    }
  }
  .main_container {
    min-height: 100vh;

    padding: 30px 15px;
    .box_main {
      height: 100%;

      display: flex;
      flex-direction: column;
      gap: 10px;

      h2 {
        color: var(--Grey-0);
        font: var(--Title-18);
      }

      p {
        color: var(--Grey-0);
        font: var(--Headline-regular-16);
      }
    }
  }
  @media (min-width: 600px){
    
    nav{
      padding-inline: 100px;
    }
  }
`;
export default StyledMain;