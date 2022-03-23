import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./FlavourText.module.css";
const FlavourText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div className={styles.textBlock}>
          <Typography
            // sx={{
            //   color: "#421000",
            // }}
            variant="h4"
            component="h2"
          >
            What is the
            <Typography
              sx={{
                letterSpacing: 4,
                m: 1,
                color: "white",
                textDecorationLine: "underline",
              }}
              variant="h4"
              component="span"
            >
              Pomodoro technique?
            </Typography>
          </Typography>
          <Typography
            sx={{ lineHeight: 2.5, color: "#33130a" }}
            variant="p"
            component="p"
          >
            Pomodoro is a study and focus strategy that revolves around small
            sprints of productivity, typically in lengths of 25 minutes each.
            Named after the tomato-shaped kitchen timer that Francesco Cirillo
            used to develop the strategy in the late 1980s. After each "sprint",
            a short break of 5 minutes is taken, and the work is continued.
            After 4 short breaks, a long break is taken, typically a length of
            20 minutes.
          </Typography>
        </div>
        <div className={styles.textBlock}>
          <Typography variant="h4" component="h2">
            Why use the
            <Typography
              sx={{
                letterSpacing: 4,
                m: 1,
                color: "white",
                textDecorationLine: "underline",
              }}
              variant="h4"
              component="span"
            >
              Pomodoro technique?
            </Typography>
          </Typography>
          <Typography
            sx={{ lineHeight: 2.5, color: "#33130a" }}
            variant="p"
            component="p"
          >
            The Pomodoro technique develops habits and continuous focus while
            also providing periodic breaks at regular intervals as to not
            overexert the person. A goal of the technique is to reduce the
            effect of internal and external interruptions on focus and flow. A
            pomodoro is indivisible; when interrupted during a pomodoro, either
            the other activity must be recorded and postponed (using the inform
            – negotiate – schedule – call back strategy) or the pomodoro must be
            abandoned.
          </Typography>
        </div>
        <div className={styles.textBlock}>
          <Typography
            sx={{
              // letterSpacing: 4,
              m: 1,
              // color: "white",
              textDecorationLine: "underline",
            }}
            variant="h4"
            component="h2"
          >
            Features
          </Typography>
          <Typography
            sx={{ lineHeight: 2.5, color: "#33130a" }}
            variant="p"
            component="p"
          >
            <ul>
              <li>Three different default timers</li>
              <li>An integrated task and to-do list for ease of use</li>
              <li>
                Tasks stored persists through sessions to start where you left
                off
              </li>
              {/* <li>Customizable timers to match every user's needs</li> */}
            </ul>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FlavourText;
