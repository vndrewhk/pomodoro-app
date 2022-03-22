import styles from "./Footer.module.css";
import "@fontsource/pangolin";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = () => {
  const timerMode = useSelector((state) => state.mode);
  const reduxTimerValue = `time-${timerMode.mode.toString()}`;

  const appClasses = `${styles.footer} ${styles[reduxTimerValue]}`;
  return (
    <div className={appClasses}>
      <h2>
        Made with love, by  &nbsp;
             <a href="https://github.com/vndrewhk">Andrew</a>
      </h2>
    </div>
  );
};

export default Footer;
