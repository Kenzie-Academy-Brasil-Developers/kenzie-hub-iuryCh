import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 130px;

  border-bottom: 1px solid var(--Grey-3);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  h2{
    color: var(--Grey-0);
    font: var(--Title-18);
  }
  p{
    color: var(--Grey-1);
    font: var(--Headline-regular);
  }
    @media (min-width: 600px){
      /* padding-inline: 50px;

      display: flex;
      align-items: center;
      justify-content: space-between; */
    }

`;
export default StyledHeader;
