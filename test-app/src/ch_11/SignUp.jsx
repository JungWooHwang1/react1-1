import { useState } from "react";

const SignUp = () => {
    const [name, setName] = useState()
    const [gender, setGender] = useState("여자")
    const [text, setText] = useState("텍스트 에어리어")

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeGender = (e) => {
        setGender(e.target.value)
    }
    const handleChangeText = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = (e) => {
        alert(`이름: ${name}, 성별: ${gender}, 테스트: ${text}`)
        e.preventDefalut()
    }

    return (
        <form onSubmit = {handleSubmit}>
            <label>
                이름:
                <input type="text" value = {name} onChange={handleChangeName} placeholder="홍길동"/> 
            </label>
            <br/>
            <label>
            성별:
                <select type="text" value = {gender} onChange={handleChangeGender} placeholder="남자">
                    <option value = "남자">남자</option>
                    <option value = "여자">여자</option>
                </select>
            </label>
            <label>
                <textarea value = {text} onChange={handleChangeText} placeholder="본문을 입력"></textarea>
            </label>
            <br/>
            <button type = "submit">제출</button>
        </form>
    )
}
export default SignUp
