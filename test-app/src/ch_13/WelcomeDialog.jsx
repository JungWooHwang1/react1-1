import FancyBorder from "./FancyBorder";

export default function WelcomeDialog () {
    return (
        <FancyBorder color= "blue">
            <h1 className="Dialog-title">어서옵셔</h1>
            <p className="Dialog-Message">사이트 방문을 환영합니다</p>
        </FancyBorder>
    )
}