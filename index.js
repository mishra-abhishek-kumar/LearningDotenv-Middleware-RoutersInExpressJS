const express = require('express');


//configuring dotenv file: helps take all variables from file to be available at process level
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

const app = express();

app.get('/', (req, res) => {
    res.send({
        DATA: "OK"
    })
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Listining server on port:", PORT);
})