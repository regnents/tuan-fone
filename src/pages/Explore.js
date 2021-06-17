import React from "react";
import { useState } from "react";
import PageCard from "../components/PageCard";
import { Grid, Box, makeStyles } from "@material-ui/core";
import CardPic from "../assets/CarPic.jpg";
import DrivePic from "../assets/DrivePic.jpg";
import CircuitPic from "../assets/CircuitPic.jpg";

export default function Explore() {

  const [cardFills, setCardFills] = useState([
    {
      id: 1,
      title: "Drivers",
      desc: "See the info about the driver in the 2020 season.",
      link: "/Drivers",
      pic: DrivePic
    },
    {
      id: 2,
      title: "Constructors",
      desc: "See the info about the constructor in the 2020 season.",
      link: "/Constructors",
      pic: CardPic
    },
    {
      id: 3,
      title: "Circuits",
      desc: "See the info about the Circuits in the 2020 season.",
      link: "/Circuits",
      pic: CircuitPic
    },
  ]);

  const useStyles = makeStyles(() => ({
    fullScreenArea: {
        minHeight: '100vh',
        minWidth: '100vw'
    }
  }))

  const classes = useStyles()
  return (
    <div>
      <Grid
        container
        direction="row"
        alignItems="center"
        justify="space-evenly"
        className={classes.fullScreenArea}
      >
        {cardFills.map((cardFill) => (
          <Box my={2}>
            <PageCard
              key={cardFill.id}
              title={cardFill.title}
              desc={cardFill.desc}
              link={cardFill.link}
              pic={cardFill.pic}
            />
          </Box>
        ))}
      </Grid>
    </div>
  );
}
