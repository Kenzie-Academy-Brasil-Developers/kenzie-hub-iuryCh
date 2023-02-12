import StyledHeader from "./style.js";

function Header({ userName, uderModule }) {
 
  return (
    <StyledHeader>
      <h2>{userName}</h2>
      <p> {uderModule} </p>
    </StyledHeader>
  );
}

export default Header;
