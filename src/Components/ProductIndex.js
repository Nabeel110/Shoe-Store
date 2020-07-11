import React from 'react';
import { Grid, Box } from "@material-ui/core"
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ShoppingBasket as ShoppingBasketIcon, Details } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ShoesData from '../ProductsData/Shoes.json';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    '&.hover': {
        backgroundColor: 'lightGray'
    },
    btn:{
        color: "black"
    }
});

const handleClick = (product) => {
    console.log('I am clicked')
}






const ProducIndex = () => {

    const  products  = ShoesData;
    console.log(products);
    const classes = useStyles();


    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Welcome to Products Page</h1>
            <Grid container align="center" spacing={1}>
                {Object.entries(products).map(([productID, {image,title, _id}]) => 
                     (
                        <Grid item xs={12} sm={6} md={3} key={_id}>

                            <Box boxShadow={3}>
                                {/* <Link to ="/"> */}
                                <Card className={classes.root}>
                                    <CardActionArea>

                                        <CardMedia
                                            component="img"
                                            className={classes.media}
                                            image={image}
                                            title={title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                                across all continents except Antarctica
          </Typography>
                                        </CardContent>

                                    </CardActionArea>
                                    <CardActions>
                                        <Button onClick={handleClick} size="small" variant="outlined" color="secondary">
                                            <ShoppingBasketIcon /> &nbsp; Add to Basket
        </Button>
                                        <Link to={productID} style={{ textDecoration: 'none' }}>
                                            <Button size="small" variant="outlined" className= {classes.btn}>
                                                <Details /> &nbsp; Details
        </Button>

                                        </Link>
                                    </CardActions>
                                </Card>
                                {/* </Link> */}
                            </Box>
                        </Grid>
                    )

                )}
            </Grid>
        </>

    );
}

export default ProducIndex;