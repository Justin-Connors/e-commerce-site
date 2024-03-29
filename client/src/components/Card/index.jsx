import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({ 
    name,
    description,
    image,
    price
 }) => {
    return (
        <Card sx={{ width: '250px', m: 0.5 }} >
            <CardMedia
                color="inherit"
                component="img"
                alt={name}
                height="140"
                image={image}
                title={name}
            />
            <CardContent>
                <Typography variant="h5" color="inherit" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="inherit" component="p">
                    {description}
                </Typography>
                <Typography variant="h6" color="inherit" component="p">
                    Price: ${price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;