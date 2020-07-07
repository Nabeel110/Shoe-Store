import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ProfilePic from '../Images/profile_photo.jpg'
import Grid from '@material-ui/core/Grid';
import {GitHub} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
   
    margin: "100px",
  },
  paper :{
      textAlign:"center"
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    // padding:"5px"
  },
}));



const About = () => {

    const classes = useStyles();
    return (  
        <div >
        <Navbar />
        <div className ={classes.root} style = {{textAlign :"center"}}>
        <h1 style ={{textAlign: "center", paddingLeft: "12px"}}>ABOUT ME</h1>
        
        <Grid container>
        <Grid  item xs ={12}>

        <Paper  style ={{backgroundColor: "#c7c5f5",marginLeft: "50px", height:"350px", paddingTop:"3px", paddingBottom:"7px"}} className= {classes.paper} elevation={3}>
            <h2>Nabeel Ahmed</h2>
            <div style  ={{paddingLeft: "42%"}}>
            <Avatar  alt="Remy Sharp" src={ProfilePic} className={classes.large} />
            </div>
            <p style ={{fontWeight: "bold", fontSize: "30px", paddingLeft:"5px", paddingRight:"5px"}}><span>If you like the project,give a <span role ="img" aria-label= "Emoji">⭐</span>on my repository</span> </p>
            <a style ={{listStyle: "none"}} href ="https://github.com/Nabeel110"><GitHub style = {{color:"#BA1D1D"}} fontSize= "large"/><bold>Github</bold></a>
       
        </Paper>
        </Grid>
        </Grid>
        </div>
        </div>
    );
}
 
export default About;