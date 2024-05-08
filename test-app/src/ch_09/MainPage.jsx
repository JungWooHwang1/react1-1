import { useState } from "react";
import WarningBanner from "./WarningBanner";

const Mainpage = () => {
    const [showWarning, setShowWarning] = useState(false)

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning)
    }

    return (
        <>
            <WarningBanner warning = {showWarning}></WarningBanner>
            <button onClick={handleToggleClick}>
                {showWarning ? '감추기' : '보이기'}
            </button>
        </>
    )

}


export default Mainpage