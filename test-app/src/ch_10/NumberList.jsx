import React from "react";

const NumberList = () => {
    // const {numbers} = props
    const numbers = [1, 2, 3, 4, 5]
    // id 값을 key props로 사용한 경우
    const listItem = numbers.map((number, index) =>
        <li key={index}>{number}</li>
    )
    // index값을 key props로 사용한 경우
    const itemItem = numbers.map((todoList) =>
        <li key={todoList.id}>{todoList.todo}</li>
    )
    //포맷팅된 문자열을 key props로 사용한 경우
    const foos = numbers.map((foo, index) =>
        <li key={index}>{foo.todo}</li>
    )
    return (
        <>
            <ul>{listItem}</ul>
            <ul>{itemItem}</ul>
            <ul>{foos}</ul>
        </>

    )

}
export default NumberList