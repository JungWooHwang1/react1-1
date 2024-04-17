import React from "react";
import ReactDOM from 'react-dom/client';




export default function Welcome(props){
    return <h1>hello, {props.name}</h1>
}

const element = <Welcome name = "정우"/>;
ReactDOM.render(
    element,
    document.getElementById('root')
);