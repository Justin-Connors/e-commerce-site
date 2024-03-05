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
        <Card style={{ maxWidth: '300px'}}>
            <CardMedia
                component="img"
                alt={name}
                height="140"
                image={image}
                title={name}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <Typography variant="h6" component="p">
                    Price: ${price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;