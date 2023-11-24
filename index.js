const express = require('express');
//configuring dotenv file: helps take all variables from file to be available at process level
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

//importing main Router
const mainRouter = require('./routes/index');

const app = express();
app.use(express.json()); //used to parse any object sent as a reques

//importing DBConnection
const dbConnect = require('./dbConnect'); //returning the function as we have exported function

//Using mainRouter to access every other endpoints
//This will help to not cluster our this main index file, we are seperating our endpoints in deiffernet area
app.use('/', mainRouter);


app.get('/', (req, res) => {
    res.send({
        DATA: "OK"
    })
});

const PORT = process.env.PORT;

dbConnect(); //calling it to make DB connection

app.listen(PORT, () => {
    console.log("Listining server on port:", PORT);
})