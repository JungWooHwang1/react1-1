import { useState } from "react";
import ToolBar from "./ToolBar";


const LandingPage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const onClickLogin = () => {
        setIsLoggedIn(true)
    }

    const onClickLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <ToolBar
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />

            <div style = {{padding : 10}}>소플과 함께하는 리액트 공부!</div>

        </div>
    )
}

export default LandingPage