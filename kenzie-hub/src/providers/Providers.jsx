import React from "react";
import UserProvider from "./UserContext";
import TechProvider from "./TechContext";

function Providers({ children }) {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
}
export default Providers;
