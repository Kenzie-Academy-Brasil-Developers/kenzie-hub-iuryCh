
import Header from "../../components/Header";
import StyledMainMain from "./style.js";

function Dashboard({ sendBack, setUser }) {
  return (
    <>
      <Header sendBack={sendBack} setUser={setUser} />
      <StyledMainMain>
       
      </StyledMainMain>
    </>
  );
}

export default Dashboard;
