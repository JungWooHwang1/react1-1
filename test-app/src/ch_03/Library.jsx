import React from "react";
import Book from "./Book"; //Book 컴포넌트 import

export default function (props) {
    return (
        <div>
            <Book name = "처음 만난 파이썬" numOfPage = {300}></Book>
            <Book name = "처음 만난 aws" numOfPage = {400}></Book>
            <Book name = "처음 만난 리액트" numOfPage = {500}></Book>
        </div>
    )
}