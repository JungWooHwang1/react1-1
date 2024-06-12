import styled from "styled-components"

const Wrapper = styled.div`
    padding: 1em;
    background: gray;    
`
const Title = styled.h1`
    font-size: 1.5rem;
    color: white;
    text-align: center;
`

const Button = styled.button`
    color: ${props => props.dark ? 'white' : 'dark'};
    background: ${props => props.white ? 'dark' : 'white'};
    border: 1px solid black;
`
const RoundButton = styled(Button)`
    border-radius: 16px;

`
const blockItem = [
    {
        label: "1",
        padding: "1rem",
        backgroundColor: "red",
    },
    {
        label: "2",
        padding: "3rem",
        backgroundColor: "green",
    },
    {
        label: "3",
        padding: "2rem",
        backgroundColor: "blue",
    },
];


export default function MainPage() {
    return (
        <Wrapper>
            <Title>안녕리액트</Title>
            <Button>nomal</Button>
            <Button dark> Dark</Button>
            <RoundButton>Round Button</RoundButton>
            <br></br>
            {blockItem.map((blockItem) => {
                <block
                    padding={blockItem.padding}
                    backgroundColor={blockItem.backgroundColor}>
                    {blockItem.label}
                </block>
            })}
        </Wrapper>
    )
}