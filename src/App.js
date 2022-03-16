import "./App.css";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Main/Body";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Body></Body>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
