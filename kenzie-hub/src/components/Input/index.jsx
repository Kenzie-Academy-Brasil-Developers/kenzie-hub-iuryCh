import StyledInput from "./style.js";

function Input({ label, type, id, placeholder, register, error }) {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register(id)} />
      {error && <p>{error}</p>}
    </StyledInput>
  );
}

export default Input;
