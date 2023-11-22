
const getPost = async (req, res) => {
    res.send("Got the post");
}

const getAllPost = async (req, res) => {
    res.send("Got all the post");
}

module.exports ={
    getPost,
    getAllPost
}