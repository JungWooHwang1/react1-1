import { useState, useContext } from "react";
import "./final.css";

export default function Final() {
  const [theme, setTheme] = useState("aa");
  const changeTheme = useContext(() => {
    if (theme == "aa") {
      setTheme("dark");
    }
  }, [theme]);

  return (
    <div
      class="main"
      style={{
        backgroundColor: theme,
      }}
    >
      Background Color:<span id="color" value={{ theme }}></span>
      <input id="input_color"></input>
    </div>
  );
}
