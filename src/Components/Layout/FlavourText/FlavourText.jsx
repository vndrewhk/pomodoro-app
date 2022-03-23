import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styles from "./FlavourText.module.css";
const FlavourText = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <Typography variant="h4" component="h2">
          What is a
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
            "Pomodoro"?
          </Typography>
        </Typography>
        <Typography sx={{ lineHeight: 2.5 }} variant="p" component="p">
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
        </Typography>
      </div>
    </div>
  );
};

export default FlavourText;
