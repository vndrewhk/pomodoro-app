import Footer from "./Components/Layout/Footer/Footer";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Main/Body";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import { useSelector } from "react-redux";
function App() {
  const timerMode = useSelector((state) => state.mode);
  const reduxTimerValue = `time-${timerMode.mode.toString()}`;
  const appClasses = `${styles.App} ${styles[reduxTimerValue]}`;
  // console.log(appClasses);

  return (
    <Router>
      <div className={appClasses}>
        <Header></Header>

        <Body></Body>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
