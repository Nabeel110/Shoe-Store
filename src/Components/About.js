import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ProfilePic from '../Images/profile_photo.jpg'
import Grid from '@material-ui/core/Grid';
import { GitHub } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {

    flexGrow: 1,
    margin: "100px"
  },
  paper: {
    textAlign: "center"
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    // padding:"5px"
  },
  avatar: {
    paddingLeft: "20px",

  }
}));



const About = () => {

  const classes = useStyles();
  return (
    <div >
      <Navbar />
      <div className={classes.root} style={{ textAlign: "center" }}>
        <h1 style={{ textAlign: "center", paddingLeft: "12px" }}>ABOUT ME</h1>

        <Grid container
          spacing={3}
          direction="row"
          alignItems="center"
          justify="center" zeroMinWidth
          alignContent="center"
          wrap="wrap"
        >
          <Grid item xs={12} sm={12} md={12} xs-center justify-xs-center>

            <Paper style={{ backgroundColor: "#c7c5f5", height: "390px", paddingTop: "3px", paddingBottom: "20px" }} className={classes.paper} elevation={3}>
              <h2>Nabeel Ahmed</h2>
              <Grid container
                spacing={3}
                direction="row"
                alignItems="center"
                justify="center" zeroMinWidth
                alignContent="center"
                wrap="wrap"
              >
                <Grid item xs={12} sm={12} md={12} xs-center justify-xs-center></Grid>
                <Avatar srcSet zeroMinWidth alt="Remy Sharp" src={ProfilePic} className={classes.large} />
                <Grid />
              </Grid>
              <Typography style={{ fontWeight: "bold", fontSize: "30px", padding: "3%" }}><span>"If you liked my project,don't forget to leave a <span role="img" aria-label="Emoji">⭐</span>on my repository."</span> </Typography>
              <a style={{ listStyle: "none" }} href="https://github.com/Nabeel110/Shoe-Store"><GitHub style={{ color: "#BA1D1D" }} fontSize="large" /><bold>Github</bold></a>

            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default About;