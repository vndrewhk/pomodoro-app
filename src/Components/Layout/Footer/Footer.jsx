import styles from "./Footer.module.css";
import "@fontsource/pangolin";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Footer = () => {
  const appClasses = `${styles.footer}`;
  return (
    <div className={appClasses}>
      <div className={styles.links}>
        <IconButton
          aria-label="Github.com"
          onClick={() => window.open("https://github.com/vndrewhk/")}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Linkedin.com"
          onClick={() =>
            window.open("https://www.linkedin.com/in/andrew-m-394714136/")
          }
        >
          <LinkedIn fontSize="large" />
        </IconButton>
      </div>

      <h2>
        Made by &nbsp;
        <a href="https://github.com/vndrewhk">Andrew</a>
      </h2>
    </div>
  );
};

export default Footer;
