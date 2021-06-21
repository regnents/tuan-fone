import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function DriverData(props) {
  const { driver } = props;

  const link = "/Driver/" + driver.driverId
  const useStyles = makeStyles(() => ({
    driversListBox: {
      width: "100%",
      borderBottom: "2px solid black",
    },
    driversData: {
      width: "80%",
    },
    driversNumber: {
      width: "15%",
      textAlign: "center",
    },
    textNoDecoration: {
      textDecoration: "none",
      color: "inherit",
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.driversListBox} mb={2} pb={1}>
      <Grid container alignItems="flex-end" spacing={2}>
        <Grid item xs={2} className={classes.driversNumber}>
          <Typography component="div">
            <Box fontSize={30} fontWeight={500}>
              {driver.permanentNumber}
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={8} md={9}>
          <Typography component="div">
            <Box fontSize={25}>
              {driver.givenName} {driver.familyName}
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={2} md={1}>
          <Button variant="outlined" color="primary" size="small">
            <Link to={link} className={classes.textNoDecoration}>
              Details {">"}
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
