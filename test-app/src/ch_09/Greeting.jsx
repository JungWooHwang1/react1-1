const Greeting = (props) => {
    if (props.isLogIn) {
        return (
            <p>환영합니다.</p>
        )
    }
    return <p>로그인 해주세요</p>
}
export default Greeting