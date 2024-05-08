import React from "react";
const MyButton = (props) => {
    const handelDelete = (id, e) => {
        console.log(id, e.target)
    }

    return (
        <button onClick={(e) => handelDelete(1,e)}>삭제</button>
    )
    
}

export default MyButton;