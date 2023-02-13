import StyledHeader from "./style.js";

function Header({ userName, userModule }) {
 
  return (
    <StyledHeader>
      <h2>{userName}</h2>
      <p> {userModule} </p>
    </StyledHeader>
  );
}

export default Header;
