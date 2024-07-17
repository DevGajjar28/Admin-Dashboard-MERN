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

//data import

const { User } = require("./models/User.js");
const { dataUser } = require("./data/index.js");


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


// MONGOOSE SETUP //
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    //    Only add data one time
    // User.insertMany(dataUser);

}).catch((error) => console.log(`${error} didn not find`))