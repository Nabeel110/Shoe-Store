import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import ShoesData from '../ProductsData/Shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    root: {
        margin: '100px',
      p:{
          textAlign: "center"
      },
      paper:{
        backgroundColor: "#be1d1d"
      },
      desc:{
          margin:"10"
      }
    },
  }));

const ProductDetails = () => {

    const classes = useStyles();

    const {productID} = useParams();

    const product = ShoesData.products[productID];

    const {title, image, description, availableSizes, price } = product

    console.log(title);

    console.log(productID);
    return ( 
      <>
      {/* <Navbar /> */}
        <div className={classes.root} style = {{textAlign :"center"}}>
        <h1 style ={{textAlign:"center"}}>Item Details</h1>
            <Paper style = {{backgroundColor: "#be1d1d", color:"white"}} className= {classes.paper} elevation={3}>
            <br/>
            <h1 style ={{fontSize: "3rem"}}>{title}</h1>
            <img src ={image} alt = {title} width = "100%" height ="2%" />
            
            
            <p style ={{textAlign:"center", margin:"20px", fontSize: "30px"}}>{description}</p>
            <p style = {{fontSize: "2rem"}}><strong>Avalaible Sizes:</strong> {availableSizes.map(size => size + "   "  )}</p>
            <h2>Price: $ {price}</h2>
            <br /> <br />
            </Paper>
            <Outlet />
        </div>
        </>
     );
}
 
export default ProductDetails;