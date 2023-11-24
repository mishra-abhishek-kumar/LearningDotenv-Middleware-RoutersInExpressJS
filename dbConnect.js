const mongoose = require("mongoose");

const DB = () => {
    try {
        mongoose.connect(
            "mongodb+srv://temp:PwadZOK8SdmBuox9@cluster0.pxqen0f.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true, // default recommended options
                useUnifiedTopology: true,
            }
        )
            .then(e => console.log("MongoDB ready"))
            .catch(console.error);
    } catch (error) {
        console.log(error);
    }
}

module.exports = DB;