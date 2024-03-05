require("dotenv").config();
const db = require("./connection");
const { Product, User } = require("../models");

db.once("open", async () => {
    await Product.deleteMany();
    
    const products = await Product.insertMany([
        {
        name: "Laptop",
        description: "This is a laptop",
        price: 1000.00,
        quantity: 10
        },
        {
        name: "Phone",
        description: "This is a phone",
        price: 500.00,
        quantity: 20
        },
        {
        name: "Headphones",
        description: "These are headphones",
        price: 50.00,
        quantity: 50
        },
        {
        name: "Keyboard",
        description: "This is a keyboard",
        price: 150.00,
        quantity: 15
        },
        {
        name: "Monitor",
        description: "This is a monitor",
        price: 300.00,
        quantity: 10
        }
    ]);

    products.forEach((product) => {
        console.log(product.name);
    });
    
    console.log("products seeded");

    process.exit();
});
  