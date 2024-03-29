import styled from "styled-components";

const Styledform = styled.form`
  width: 96%;

  display: flex;
  flex-direction: column;

  gap: 20px;

  .select_label {
    font: var(--Headline-regular-12);
    color: var(--Grey-0);
  }

  select {
    height: 40px;

    border: none;
    padding-inline: 12px;

    background-color: var(--Grey-2);

    color: var(--Grey-1);
    :focus {
      border: 1px solid var(--Grey-0);
    }
  }

  p {
    font: var(--Headline-italic);
    color: var(--Negative);
  }


  @media (min-width: 720px) {
    .box_topregister,
    .box_groundcolor {
      width: 320px;
    }
  }
`;

export default Styledform;
