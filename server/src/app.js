const dotenv = require('dotenv');
const express = require('express');

const cors = require('cors');
const { errors } = require('celebrate')

dotenv.config();

const app = express();  
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes); 
app.use(errors());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.listen(process.env.PORT || 3333);

module.exports = app; 