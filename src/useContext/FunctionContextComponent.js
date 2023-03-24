import React, { useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "./ThemeContext";


 function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>Function Theme</div>
    </>
  );
}

export default FunctionContextComponent;
