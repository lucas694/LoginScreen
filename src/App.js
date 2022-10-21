import logo from './logo.svg';
import './App.css';
import Wellcome from "./Components/Wellcome";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="AppContainer">
      <Wellcome/>
      <Login/>
    </div>
  );
}

export default App;
