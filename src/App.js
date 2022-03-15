import "./App.css";
import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Main/Body";

function App() {
  return (
    <>
      <div className="App">
        <Header></Header>
        <Body></Body>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
