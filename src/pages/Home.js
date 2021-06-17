import { Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

export default function Home() {
  const useStyle = makeStyles(() => ({
    mainTitle: {
      fontWeight: 600,
      marginBottom: "5%",
      textAlign: 'center'
    },
    fullScreenArea: {
      minHeight: "100vh",
      minWidth: "100vw",
    },
    textNoDecoration: {
      textDecoration: "none",
      color: 'inherit'
    },
  }));

  const classes = useStyle();
  return (
    <div className="Home">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.fullScreenArea}
      >
        <Typography variant="h4" className={classes.mainTitle}>
          UNOFFICIAL WEBSITE OF THE 2020 F1 SEASON
        </Typography>

        <Button variant="outlined">
          <Link to="/Explore" className={classes.textNoDecoration}>
            Start exploring
          </Link>
        </Button>
      </Grid>
    </div>
  );
}
