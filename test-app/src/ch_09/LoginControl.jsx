import { useState } from "react";
import Greeting from "./Greeting";

const LoginControl = (props) => {
    const [isLogIn, setIsLogIn] = useState(false)

    const handleLoginClick = () => {
        setIsLogIn(true)
    }
    const handleLogoutClick = () => {
        setIsLogIn(false)
    }
    let button 
    if (isLogIn) {
        button = <LogoutButton onClick = {handleLogoutClick}/>
    }
    else{
        button = <LoginButton onClick = {handleLoginClick}/>   
    }

    return (
        <>
            <Greeting isLogIn = {isLogIn}/>
            {button}
        </>
    )
}

export default LoginControl;

const LoginButton = (props) =>{
    return (
        <button onClick={props.onClick}>로그인</button>
    )

}
const LogoutButton = (props) =>{
    return (
        <button onClick={props.onClick}>로그아웃</button>
    )
}

