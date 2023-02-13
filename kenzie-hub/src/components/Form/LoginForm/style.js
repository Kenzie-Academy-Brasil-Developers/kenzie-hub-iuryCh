import styled from "styled-components";

const StyledForm = styled.form`
  width: 260px;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;

  label {
    color: var(--Grey-1);
    font: var(--Headline-regular);
  }

  input {
    position: relative;
    width: 100%;
    height: 40px;

    border: none;

    padding-inline: 13px;

    background-color: var(--Grey-2);
    color: var(--Grey-0);

    :focus {
      border: 1px solid var(--Grey-0);
    }
  }
  .error_msg-p1,
  .error_msg-p2 {
    font: var(--Headline-italic);
    color: var(--Negative);
  }

  .eye_img {
    position: absolute;
    top: 131px;
    left: 234px;

    cursor: pointer;
  }

  button {
    height: 40px;
    width: 100%;

    margin-top: 15px;
    border: none;

    align-self: center;

    background-color: var(--Color-primary);
    color: white;

    font: var(--Headline-regular);

    :hover {
      background-color: var(--Color-primary-Focus);
    }
  }

  @media (min-width: 720px) {
    width: 330px;

    .eye_img {
      left: 302px;
    }
  }
`;
export default StyledForm;
