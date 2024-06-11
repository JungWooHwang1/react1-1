
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
