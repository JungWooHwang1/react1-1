import React, { useState, useContext } from "react";
import ThemeContext from "./ThemeContext";
import MainContext from "./MainContext";


export default function DarkOrLight(props){
    const [theme, setTheme] = useState("light")
  
    
    const toggleTheme = useContext(()=>{
      if(theme == "light"){
        setTheme("dark");
      }else if(theme == "dark"){
        setTheme("light");
      }
    },[theme]);
  
    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <MainContext />
      </ThemeContext.Provider>
    );
  }
  