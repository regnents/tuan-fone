import React from "react";
import {
  Card, 
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

export default function PageCard(props) {
  const { title, desc, link, pic } = props;
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    rootHeight: {
      height: '100%'
    },
    media: {
      height: 200,
    },
    textNoDecoration: {
      textDecoration: "none",
      color: "inherit",
    },
  });

  const classes = useStyles();

  return (
    <div className="PageCard">
      <Card className={classes.root}>
        <CardActionArea className={classes.rootHeight}>
          <Link to={link} className={classes.textNoDecoration}>
            <CardMedia image={pic} className={classes.media} />
            <CardContent>
              <Typography>{title}</Typography>
              <Typography>{desc}</Typography>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </div>
  );
}
