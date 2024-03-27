import React from "react";

export default function Book(props){ //컴포넌트화
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다. `}</h1>
            <h2>{`이 책의 총 ${props.numOfPage}페이지로 이루어져 있습니다. `}</h2>
        </div>
    )
}