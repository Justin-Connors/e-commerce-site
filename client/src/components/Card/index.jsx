import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({ props }) => {

    const product = {
        name: "Laptop",
        description: "A laptop computer",
        image: "https://via.placeholder.com/150",
        price: 1000
    }
        
    return (
        <Card style={{ maxWidth: '300px'}}>
            <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
                title={product.name}
            />
            <CardContent>
                <Typography variant="h5" component="h2">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {product.description}
                </Typography>
                <Typography variant="h6" component="p">
                    Price: ${product.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;