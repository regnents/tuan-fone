import { Button, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const useStyle = makeStyles(() => ({
    mainTitle: {
      fontWeight: 600,
      marginBottom: "5%",
      textAlign: 'center'
    },
    fullScreen: {
      minHeight: "100%",
      minWidth: "100%",
    },
    textNoDecoration: {
      textDecoration: "none",
      color: 'inherit'
    },
  }));

  const classes = useStyle();
  return (
    <div className="Home">
      <Navbar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.fullScreen}
      >
        <Typography variant="h4" className={classes.mainTitle}>
          UNOFFICIAL WEBSITE OF THE 2020 F1 SEASON
        </Typography>

        <Button variant="outlined">
          <Link to="/New" className={classes.textNoDecoration}>
            Start exploring
          </Link>
        </Button>
      </Grid>
    </div>
  );
}
