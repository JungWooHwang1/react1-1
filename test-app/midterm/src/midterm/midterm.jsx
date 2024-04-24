import React, { useState, useRef }   from "react";


function Midterm() {
    const [count, setMidterm] = useState(0);
}

const styles = {
    margin: 8,
    padding: 8,
    display: "flex",
    

}
 function Comment(props){
    return (
        <div>   
            <h1>당신은 어떤 과일을 좋아하나요? {FruitsButton()}</h1> 
        </div>
        
    )
}

export default function FruitsButton(props){
    const inputElem = useRef(null)

    const onButtonClick = () => {
        inputElem.current.focus()
    }
    return (
        <>
            <input ref = {inputElem} type = "text"/>
            <button onClick = {onButtonClick}>사과</button>
            <button onClick = {onButtonClick}>오렌지</button>
            <button onClick = {onButtonClick}>바나나</button>
        </>
    )
}


