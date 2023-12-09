require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const apiRoutes = require('./routes/index')
const db = require('./utils/db');

const session  = require('express-session');

const cookieParser = require('cookie-parser');

const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

db.connect();
app.use(cors());

app.use(session({
    secret: JWT_SECRET,
    resave: true,
    saveUninitialized: true
  }));

app.use(cookieParser());

app.get('/', (req, res) => {
    res.status(200).send('ok')
})

app.use(apiRoutes);

app.listen(port, () =>{
    console.log("Server listen in port "+port);
});

