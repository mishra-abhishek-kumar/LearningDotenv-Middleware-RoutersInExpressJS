const express = require('express');
//configuring dotenv file: helps take all variables from file to be available at process level
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

//importing main Router
const mainRouter = require('./routes/index');

const app = express();

//Global Middleware: It will run before anyother API
app.use((req, res, next) => {
    console.log(req.method, req.url, new Date().toTimeString());
    next();
})

//Using mainRouter to access every other endpoints
//This will help to not cluster our this main index file, we are seperating our endpoints in deiffernet area
app.use('/', mainRouter);


app.get('/', (req, res) => {
    res.send({
        DATA: "OK"
    })
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Listining server on port:", PORT);
})