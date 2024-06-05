import logo from "./logo.svg";
import "./App.css";
import Calculator from "./ch_12/Calculrator";
import FancyBorder from "./ch_13/FancyBorder";
import WelcomeDialog from "./ch_13/WelcomeDialog";
import SplitPane from "./ch_13/SplitPane";

function App() {
  return (
    <div className="App">
      <SplitPane
        left = {<Contacts />}
        right = {<Chat />}
      />
    </div>
  );
}

export default App;
