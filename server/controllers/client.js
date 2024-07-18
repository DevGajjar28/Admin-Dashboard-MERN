const Product = require("../models/Product");
const ProductStat = require("../models/ProductStat");
const User = require("../models/User")

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStat.find({
                    productId: product._id
                })
                return {
                    ...product._doc,
                    stat,
                };
            })
        );
        res.status(200).json(productsWithStats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: "user" }).select("-password");
        res.status(200).json(customers);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}


module.exports = { getProducts, getCustomers };