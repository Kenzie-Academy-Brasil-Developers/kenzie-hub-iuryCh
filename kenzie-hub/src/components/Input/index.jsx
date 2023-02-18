import StyledInput from "./style.js";

function Input({ label, type, id, placeholder, register, error, ...props }) {
  
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
        {...props}
      />
      {error && <p>{error}</p>}
    </StyledInput>
  );
}

export default Input;
