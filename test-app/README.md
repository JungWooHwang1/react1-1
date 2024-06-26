

# 황정우 202030435 🔔

[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=yohan050605)](https://github.com/anuraghazra/github-readme-stats)
## 6월 11일 강의 내용 (4월 10일 보강)

- 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성한다. => 객체지향언어(클래스형)을 사용하지 않는다.
- 
### 기존방식
function App() {
    return <Toolbar theme = "dark1"></Toolbar>
}

function Toolbar(props) {
    return (
        <div>
            <ThemeButton theme = {props.theme}></ThemeButton>
        </div>
    )
}

function ThemeButton(props) {
    return (
        <Button theme = {props.theme}></Button>
    )
}
### props를 통해 계속 값을 전달 받는 기존방식 => 컴포넌트의 깊이가 깊어지면 똑같은 코드를 계속해서 반복하기 때문에 코드가 복잡해 진다. 이를 해결하기위해 컨텍스트 방법을 활용한다.

### 컨텍스트 방식

const ThemeContext = React.createContext('light')

function App() {
    return (
        <ThemeContext.Provider value = "dark">
            <Toolbar> </Toolbar>
        </ThemeContext.Provider>
    )
}

function Toolbar() {
    return (
        <div>
            <ThemeButton></ThemeButton>
        </div>
    )
}

function ThemeButton() {
    return (
        <ThemeContext.Consumer>
            {value => <Button theme = {value}></Button>}    
        </ThemeContext.Consumer>
        
    )
}
### Context API란?
#### Context API는 React version 16부터 사용 가능한 리액트의 내장 API이다.
#### 앱에서 컴포넌트에게 props를 사용하지 않고 필요한 데이터(state)를 쉽게 공유할 수 있게 해준다. 따라서 앱의 든 컴포넌트에서 사용할 수 있는 데이터(state)를 전달할 때 유용하다.


## 6월 05일 강의 내용
- 합성에 대해 알아보기 합성이란 *여러개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것
- 1) Containment
     ### 특쩡 컴포넌트가 하위 컴포넌트를 포함하는 형태의 합성 방법
     ### 컴포넌트에 따라 어떤 자식 엘리먼트가 들어올지 미리 예상할 수 없다.
     ### 범용적인 '박스' 역할을 하는 sidebar혹은 dialog와 같은 컴포넌트에서 특히 자주 볼 수 있습니다.
     ### 이런 컴포넌트에서는 children prop을 사용ㅇ하여 자식 엘리먼트를 출력에 그대로 전달하는 것이 좋다.
     ### 이떄 children prop은 컴포넌트의 porps에 기본적으로 들어있는 children속성을 사용한다.
## 5월 29일 강의 내용 

## 5월 22일 강의 내용 

#### import React from "react"; 는 style 을 사용 하지 않으면 딱히 import 해주지 않아도 된다.
   #### props.isLoggedIn, props.onClickLogin, props.onClickLogout 요런식으로 귀찮게 props를 앞에 붙여가면서 사용해주었는데
                                  ↓↓↓
   #### const {isLoggedIn, onClickLogin, onClickLogout} = props 이렇게 선언해주면 
                                  ↓↓↓
   #### isLoggedIn, isLoggedIn, onClickLogout 간단하게 사용해줄 수 있다.
   
#### map()를 사용할때에는 복수형으로 선언해주고 map()에 파라미터로는 단수형으로 해준다. 
ex) cosnt numbers = [1,2,3,4,5]
    const listItems = numbers.map((number) => {})

## 5월 8일 강의 내용 (6주차 보강)
### Arguments에 대해

### 조건부 렌더링
#### 렌더링해야 될 컴포넌트를 변수처럼 사용하는 방법이 엘리먼트 변수

### 인라인 조건
#### if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 AND 연산자를 사용


## 5월 1일 강의 내용 

### 훅의 두가지 규칙 ✨
#### 첫번째 무조건 최상위 레벨에서만 호출해야한다. => 쉽게 가장 높은곳에다가 선언해주면 됨
#### 두번째 규칙 함수형 컴포넌트에서만 훅을 호출해야 한다. or 훅은 함수형 컴포넌트 훅은 직접 마는 커스텀 훅에서만 호출 할 수 있다 => 따라서 일반 자바스크립트 함수에서는 호출하면 안된다.

#### 결론 : 훅은 내가 원하는 시점에 특정 함수를 실행시키기 위해 훅을 사용한다.


## 4월 17일 강의 내용 7주차 
#### keyprops key의 중복을 확인

### 훅이란 무엇인가

#### 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 훅(hook)이다
#### 훅이란 state랑 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든함수
#### 훅의 이름은 모두 'use'로 시작

### useState
#### 가장많이 사용됨

### useEffect 
#### useEffect() 는 사이드 이펙트(렌더링 외에 실행해야 하는 부수적인 코드)를 사용하기 위함이고 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통한한 기능을 제공

### useMemo
#### 이전 계산값을 가지고 있어 계산량이 많은 작업의 반복을 피할 수 있다. 메모리제이션 동일한 계산을 반복하여 계산해야할때 이전에 계산한 값을 메모리에 저장하여 불러오는 형식

### useCallback
#### useMemo와 비슷하지만 useCallback은 값이 아닌 함수를 반환한다는 점이 다르다
#### useMemo와 마찬가지로 의존성 배열중 하나라도 변경되면 콜백함수를 반환 

### useRef
#### useRef는 훅은 레퍼런스를 사용하기 위함이고 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미

#### 훅의 규칙 
#### 1. 무조건 최상위 레벨에서만 호출해야함 여기서 최상위는 컴포넌트의 최사위 레벨을 의미
#### 따라서 함수나 반복문 조건문 안에서는 호출해서는안됨

## (4월 10일 강의 내용 6주차 선거휴무 5월 1일 보강)
## 4월 03일 강의 내용 5주차 

#### JS의 함수는 입력을 받으면 출력값을 내보내듯이 리액트에서 INPUT을 담당하는게 props이고 엘리먼트 값을 내보낸다.

### props의 특징
#### 읽기 전용입니다 이는 변경할 수 없다는 뜻
#### 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됩니다.

### props 사용법
 
#### JSX에서는 key-value(JSON 방식)쌍으로 props를 구성합니다.
#### props 전달 방법 createElement()함수 사용

### 컴포넌트 종류 
#### 컴포넌트는 함수 컴포넌트 클래스 컴포넌트로 나누고 과거에는 클래스형 컴포넌트를 많이 사용했지는 이후 Hook이라는 개념이 나오면서 함수형 컴포넌트를 더 많이 사용한다.

#### 함수형 컴포넌트 
#### function Welcome(props){
####        return <h1>안녕, {props.name}</>
#### }

#### 컴포넌트를 구성할때 하나의 컴포넌트에는 한가지 기능만 하도록 만드는게 좋다. (재사용을 편하게 하기 위해)


## 3월 27일 강의 내용 4주차 

#### Html은 WCC지정한 표준밖에 사용못하는 반면 더 다양한 기능을 사용하기 위해 xml이 나온다.

#### xml의 특징은 사용자정의 즉 react는 컴포넌트 단위로 개발한다 이 컴포넌트를 태그로 사용할 수 있게 해준다. (리액트 개발환경 내에서 컴포넌트 => 태그)
#### JSX는 내부적트로 XML/HTML로 변환해주고 createElement()함수를 사용해 JS코드로 변환해준다.

#### jsx 사용법 XML과 Html을 섞어 사용하고 컴포넌트를 html로 사용한다고 보면된다.
#### js코드를 사용하고 싶을 때엔 {}중괄호를 사용해 사용할 수있다.

#### 리액트 실행법 Terminal => npm start 
### 리액트 화면에 lender 하는법 
#### 프로젝트 파일내에 index.js 에 들어가 생성한 라이브러리를 import 해주고 
#### React.StrictMode 태그안에 있는 태그를 생성한 라이브러리로 바꿔준다. => 화면이 실시간 변화

## 3월 20일 강의 내용 3주차

## 리액트란 

####     리액트는 UI를 JS코드로 쉽게 구현 할 수 있다.
##### (웹 개발은 React 앱은 React Native)

#### 리액트도 번거롭다 NEXT로 짜라 그럼 왜 리액트를 배우냐 리액트를 배워야 NEXT로 빠르게 구현할 수 있다.

## 리액트의 개념 정리 1.1
#### 복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것이 바로 React => SPA 쉽고 빠르게 만들 수 있도록 해주는 도구 

## 리액트의 장점  1.2
#### 랜더링이 빠르다 왜 가능하냐 Virtual DOM 덕분이다.
#### 예전 DOM에서는 새로운 것이 생기면 전체를 리프레쉬를 함 => 바뀌지 않은 것도 싹다 바꾸기 때문에 비효율적 (동기식) 
#### Virtual DOM 은 새로운 것이 생기면 변한 부분만 바꿔준다(비동기식) 
#### 이게 가능한 이유는 Virtual DOM이 기존 DOM을 가지고 있어 비동기 방식이 가능하다.

### 비동기식 장점
#### 1. 속도가 빠르다 
#### 2. 컴포넌트 기반 구조 
#### 3. 재사용성이 좋다
#### 4. 든든한 지원군 => 메타에서 오픈소스 프로젝트로 관리
#### 5. 활발한 지식 공유 & 커뮤니티
#### 6. 모바일 앱 개발기능 => 위에 있듯 React Native로 개발

#### 리액트 프로젝트 생성 명령어 Terminal에 npx create-react-app (프로젝트명) 입력

## 3월 13일 강의 내용 2주차

### GitHub 사용법 

#### html은 홈페이지를 만들때 골격을 구성하는 태그들
#### SPA(Single Page Applicaation)  PS. 반대로는 MPA

#### CSS는 html로 만든 뼈대를 가꾸는데 사용 (I think that 비슷하지만 CSS는 html의 활력을 불어주는 언어)

## 리액트의 단점 1.3
#### 1. 방대한 학습량? JS를 배우고 나서 React를 배우기 때문이다.
#### 2. 높은 상태 관리 복잡도



