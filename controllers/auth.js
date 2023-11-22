
const signupController = async (req, res) => {
    res.send("Signup Controller")
}

const loginController = async (req, res) => {
    res.send("Login Controller")
}

module.exports = {
    signupController,
    loginController
}