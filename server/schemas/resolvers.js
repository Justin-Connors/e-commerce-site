const { AuthenticationError } = require("apollo-server-express");
const mongoose = require("mongoose");
const { User, Product } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    userById: async (parent, args, context) => {
      const user = await User.findById(args.userId).select("-email");
      return user;
    },
    product: async (parent, args, context) => {
      const product = await Product.findById(context.product._id);
      return product;
    },
    productById: async (parent, args, context) => {
      const product = await Product.findById(args.productId);
      return product;
    },
    allProducts: async () => {
      const result = await Product.find();
      return result;
    },
    products: async () => {
      return Product.find({
        $or: [
          { name: { $regex: params.filter, $options: "i" } },
          { description: { $regex: params.filter, $options: "i" } },
        ],
      });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    addProduct: async (parent, args) => {
      if(context.user) {
      const product = await Product.create(args);
      return product;
      }

      throw new AuthenticationError("Not logged in");
    },
    updateProduct: async (parent, args, context) => {
      if(context.user) {
        return await Product.findByIdAndUpdate(context.product._id, args, {
          new: true,
        });
      }

      if(!Product) {
        throw new AuthenticationError("Product not found!");
      }

      throw new AuthenticationError("Not logged in");
    },
    deleteProduct: async (parent, args, context) => {
      if(context.user) {
        return await Product.findByIdAndDelete(context.product._id);
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
