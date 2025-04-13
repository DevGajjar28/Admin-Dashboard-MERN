const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')
const helmet = require('helmet')
const dotenv = require('dotenv')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const clientRoutes = require('./routes/client.js');
const generalRoutes = require('./routes/general.js');
const managementRoutes = require('./routes/management.js');
const salesRoutes = require('./routes/sales.js');

//imports Data


const User = require("./models/User.js");
const Product = require("./models/Product.js");
const ProductStat = require("./models/ProductStat.js");
const Transaction = require("./models/Transaction.js");
const OverallStat = require("./models/OverallStat.js")
const Affiliate = require("./models/AffiliateStat.js");
const { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat } = require("./data/index.js");


// Configrations    
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan("common"));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());

//Routes    

app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);
app.use('/transactions', salesRoutes);


// MONGOOSE SETUP //
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    //    Only add data one time
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
    // Affiliate.insertMany(dataAffiliateStat);
    // User.insertMany(dataUser);

}).catch((error) => console.log(`${error} didn not find`))