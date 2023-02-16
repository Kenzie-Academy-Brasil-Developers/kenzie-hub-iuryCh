import styled from "styled-components";

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  label {
    font: var(--Headline-regular-12);
    color: var(--Grey-0);
  }
  input {
    height: 40px;

    border: none;
    padding-inline: 12px;

    background-color: var(--Grey-2);

    color: var(--Grey-1);

    ::placeholder {
      font: var(--Headline-bold);
    }
    :focus {
      border: 1px solid var(--Grey-0);
    }
  }

  p {
    font: var(--Headline-italic);
    color: var(--Negative);
  }
`;

export default StyledInput;
