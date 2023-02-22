import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";
import StyledHeader from "./style.js";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <StyledHeader>
      <h2>{user.name}</h2>
      <p> {user.course_module} </p>
    </StyledHeader>
  );
}

export default Header;
