const express = require('express');
//configuring dotenv file: helps take all variables from file to be available at process level
const dotenv = require('dotenv');
dotenv.config({path: './.env'});

//importing post router
const postRouter = require('./routes/post');

const app = express();

//Using postRouter to access the endpoint /post/
app.use('/post', postRouter);


app.get('/', (req, res) => {
    res.send({
        DATA: "OK"
    })
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Listining server on port:", PORT);
})