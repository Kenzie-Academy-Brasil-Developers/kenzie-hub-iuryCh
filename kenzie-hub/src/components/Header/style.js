import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  height: 130px;

  padding-inline: 10px;
  margin-top: 70px;

  border-bottom: 1px solid var(--Grey-3);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  h2 {
    align-self: flex-start;

    color: var(--Grey-0);
    font: var(--Title-18);
  }
  p {
    align-self: flex-start;

    color: var(--Grey-1);
    font: var(--Headline-regular);
  }
  @media (min-width: 600px) {
    padding-inline: 100px;

    flex-direction: row;
    justify-content: space-between;

    h2,
    p {
      height: 100%;

      display: inherit;
      align-items: center;
    }
  }

  @media (min-width: 1000px) {
    max-width: 1000px;
  }
`;
export default StyledHeader;
