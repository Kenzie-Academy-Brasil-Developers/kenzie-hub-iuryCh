import styled from "styled-components";

const StyledButton = styled.button`
  height: 40px;
  width: 100%;

  border: none;

  align-self: center;

  background-color: var(--Color-primary);
  color: white;

  font: var(--Headline-regular-16);

  :hover {
    background-color: var(--Color-primary-Focus);
  }
`;
export default StyledButton;
// (prop.loading ? "#59323F" : "#FF577F")
